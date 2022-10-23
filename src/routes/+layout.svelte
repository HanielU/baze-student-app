<script lang="ts">
  import "@unocss/reset/tailwind.css";
  import "$styles/css/app.css";
  import "uno.css";

  import Header from "./navigation/Header.svelte";
  import Sidebar from "./navigation/Sidebar.svelte";
  import type { LocalNotificationsPlugin } from "@capacitor/local-notifications";
  import type { PermissionState } from "@capacitor/core";
  import { Device } from "@capacitor/device";
  import { hslToHex } from "$lib/utils";
  import { navigationStack } from "$lib/stores";
  import { onDestroy, onMount } from "svelte";
  import { sidebarOpen } from "$lib/stores";
  import { themeVars } from "$styles/vanilla/theme.css";
  import Link from "./components/Link.svelte";

  let LocalNotifications: LocalNotificationsPlugin | undefined;
  let notificationsPermission: PermissionState | undefined;

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;

  let movedXBy = 0;
  let movedYBy = 0;

  function getCurrentPos(e: Event) {
    return e.type.includes("mouse") ? (e as MouseEvent) : (e as TouchEvent)?.touches?.[0];
  }

  function startDrag(e: MouseEvent | TouchEvent) {
    const target = e.target as HTMLElement;
    if (target.parentElement?.classList.contains("illegal-scroll")) return;

    dragging = true;
    ({ clientX: startX, clientY: startY } = getCurrentPos(e));
  }

  function handleDrag(e: MouseEvent | TouchEvent) {
    if (!dragging) return;
    document.documentElement.style.userSelect = "none";
    ({ clientX: currentX, clientY: currentY } = getCurrentPos(e));
  }

  function stopDrag() {
    dragging = false;
    document.documentElement.style.userSelect = "initial";

    movedXBy = currentX - startX;
    movedYBy = currentY - startY;

    // console.log({ movedXBy, movedYBy });

    // makes sure the screen has actually been swiped through
    // if screen has been swiped through then currentX and currentY
    // will be something other than 0
    if (currentX !== 0 && currentY !== 0) {
      if (movedXBy >= 80 && movedYBy >= -60 && movedYBy <= 60 && !$sidebarOpen) {
        $sidebarOpen = true;
      } else if (movedXBy <= -80 && $sidebarOpen) {
        $sidebarOpen = false;
      }
    }

    currentX = startX = currentY = startY = 0;
  }

  onMount(async () => {
    const { platform } = await Device.getInfo();

    // makes sure this is a mobile environment as desktop
    // versions are marked as "web"
    if (platform !== "web") {
      const { StatusBar } = await import("@capacitor/status-bar"); // this thing only works on android | ios
      const { Style } = await import("@capacitor/status-bar");
      const { App } = await import("@capacitor/app");
      ({ LocalNotifications } = await import("@capacitor/local-notifications"));

      StatusBar.setBackgroundColor({ color: hslToHex(themeVars.color.base[100]) });
      StatusBar.setStyle({ style: Style.Light });

      App.addListener("backButton", () => {
        if ($navigationStack !== 0) {
          $navigationStack--; // indicates the supposed new of window history length
          window.history.back();
          return;
        }
        App.exitApp();
      });

      ({ display: notificationsPermission } = await LocalNotifications.checkPermissions());

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

      LocalNotifications.addListener("localNotificationActionPerformed", notificationAction => {
        if (notificationAction.notification.actionTypeId == "reply") {
          console.log("on reply:", notificationAction.inputValue || notificationAction.actionId);
        }
      });
    }
  });
</script>

<svelte:window on:touchstart={startDrag} on:touchmove={handleDrag} on:touchend={stopDrag} />

<svelte:head>
  <title>Baze University Student Portal</title>
</svelte:head>

<div id="app" class="relative h-screen w-full pb-20 overflow-x-hidden">
  <Sidebar />

  <div class="relative h-full overflow-y-auto overflow-x-hidden">
    <Header />

    <!-- :highlight: Make sure to remove -->
    <!-- {$navigationStack} -->

    <slot />
  </div>
</div>

<!-- footer nav -->
<footer class="bg-base-100 fixed bottom-0 left-0 w-full">
  <nav class="flex-u-between w-full p-5">
    <!-- icon-wrapper -->
    <div flex-u-center gap-1>
      Plays <Link to="/sandbox" class="i-ri-play-circle-line text-base-content text-3xl" />
    </div>
  </nav>
</footer>
