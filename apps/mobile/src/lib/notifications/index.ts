import type { RegisterActionTypesOptions } from "@capacitor/local-notifications";

export const notificationActionTypes: RegisterActionTypesOptions = {
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
};
