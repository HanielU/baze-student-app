<script lang="ts">
  import "@unocss/reset/tailwind.css";
  import "$styles/css/app.css";
  import "uno.css";

  import Footer from "./components/navigation/Footer.svelte";
  import Header from "./components/navigation/Header.svelte";
  import Sidebar from "./components/navigation/Sidebar.svelte";
  import SwipeInteraction from "./components/SwipeInteraction.svelte";
  import type { LocalNotificationsPlugin } from "@capacitor/local-notifications";
  import type { PermissionState } from "@capacitor/core";
  import { Device } from "@capacitor/device";
  import { hslToHex } from "$lib/utils";
  import { navigationStack } from "$lib/stores";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { themeVars } from "$styles/vanilla/theme.css";

  let LocalNotifications: LocalNotificationsPlugin | undefined;
  let notificationsPermission: PermissionState | undefined;

  let footerHeight: number;

  onMount(async () => {
    const { platform } = await Device.getInfo();

    // makes sure this is a mobile environment as desktop
    // versions are marked as "web"
    if (platform !== "web") {
      const { StatusBar } = await import("@capacitor/status-bar"); // this thing only works on android | ios
      const { Style } = await import("@capacitor/status-bar");
      const { App } = await import("@capacitor/app");
      ({ LocalNotifications } = await import("@capacitor/local-notifications"));

      StatusBar.setBackgroundColor({
        color: hslToHex(themeVars.color.base[100]),
      });
      StatusBar.setStyle({ style: Style.Light });

      App.addListener("backButton", () => {
        if ($page.url.pathname === "/") {
          App.exitApp();
        } else if ($navigationStack !== 0) {
          $navigationStack--; // indicates the supposed new of window history length
          window.history.back();
        }
      });

      ({ display: notificationsPermission } =
        await LocalNotifications.checkPermissions());

      if (notificationsPermission == "denied") {
        const { display } = await LocalNotifications.requestPermissions();
        if (display == "denied") console.log("awww");
      }

      LocalNotifications.registerActionTypes({
        types: [
          {
            id: "reply",
            actions: [
              {
                id: "reply",
                title: "reply",
                input: true,
              },
              {
                id: "yes",
                title: "yes!",
              },
              {
                id: "no",
                title: "no.",
              },
            ],
          },
        ],
      });

      LocalNotifications.addListener(
        "localNotificationActionPerformed",
        notificationAction => {
          if (notificationAction.notification.actionTypeId == "reply") {
            console.log(
              "on reply:",
              notificationAction.inputValue || notificationAction.actionId
            );
          }
        }
      );
    }
  });
</script>

<svelte:head>
  <title>Baze University Student Portal</title>
</svelte:head>

<SwipeInteraction />

<div
  id="app"
  class="relative h-screen w-full overflow-x-hidden"
  style:--footerH="{footerHeight}px"
>
  <Sidebar />

  <div
    class="relative h-full overflow-y-auto overflow-x-hidden pb-[var(--footerH)]"
  >
    <Header />

    <slot />
  </div>
</div>

<Footer bind:footerHeight />
