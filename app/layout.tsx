import type { Viewport } from "next";
import type { ReactNode } from "react";
import MotionProvider from "@/components/layout/MotionProvider";
import { fontVariables } from "@/styles/fonts";
import { buildMetadata } from "@/utils/metadata";
import { themeInitScript } from "@/utils/theme";
import "@/styles/globals.css";

export const metadata = buildMetadata();

export const viewport: Viewport = { colorScheme: "light dark" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The theme script sets data-theme before React loads, hence the suppression.
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
