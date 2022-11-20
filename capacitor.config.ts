import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.bazeuni.studentapp",
  appName: "Baze University Student App",
  webDir: "build",
  bundledWebRuntime: false,

  // remove when building for production
  server: {
    // url: "http://192.168.0.182:5173", // hynetflex 5ghz
    // url: "http://192.168.0.59:5173", // hynetflex 5G 2.4ghz
    url: "http://192.168.92.22:5173", // redmi hotspot
    cleartext: true,
  },

  plugins: {
    LocalNotifications: {
      // smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
    },
    /* PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    } */
  },
};

export default config;
