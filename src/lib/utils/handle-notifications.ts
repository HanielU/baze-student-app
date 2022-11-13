import type { PermissionState as PSate } from "@capacitor/core";
import type { LocalNotificationsPlugin as LNP } from "@capacitor/local-notifications";

type LocalNotificationsPlugin = LNP | undefined;
type PermissionState = PSate | undefined;

export const scheduleBasic =
  (LocalNotifications: LocalNotificationsPlugin, permission: PermissionState) =>
  async () => {
    if (!LocalNotifications || !permission) return;

    if (permission == "denied") {
      alert("Notifications must be enabled for this demo to work");
      return;
    }

    await LocalNotifications.schedule({
      notifications: [
        {
          title: "This is where the title goes.",
          body: "This is where the content goes.",
          id: 1,
        },
      ],
    });
  };

export const scheduleMultiple =
  (LocalNotifications: LocalNotificationsPlugin, permission: PermissionState) =>
  async () => {
    if (!LocalNotifications || !permission) return;

    if (permission == "denied") {
      alert("Notifications must be enabled for this demo to work");
      return;
    }

    await LocalNotifications.schedule({
      notifications: [
        {
          title: "1st",
          body: "This is the first notification.",
          id: 1,
        },
        {
          title: "2nd",
          body: "This is the second notification.",
          id: 2,
        },
      ],
    });
  };
