import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "../../node_modules/@ibm/plex-sans/fonts/complete/woff2/IBMPlexSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@ibm/plex-sans/fonts/complete/woff2/IBMPlexSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@ibm/plex-sans/fonts/complete/woff2/IBMPlexSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = localFont({
  src: [
    {
      path: "../../node_modules/@ibm/plex-mono/fonts/complete/woff2/IBMPlexMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@ibm/plex-mono/fonts/complete/woff2/IBMPlexMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@ibm/plex-mono/fonts/complete/woff2/IBMPlexMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});
