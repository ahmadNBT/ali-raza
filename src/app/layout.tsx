import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./Compo/Nav/page";
import Footer from "./Compo/Footer/page";
import ReduxLayout from "./Compo/reduxlayout/page";
import { Montserrat } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {},
  manifest: "/site.webmanifest",
  title: "Portfolio",
  description: "Mern stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxLayout>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </ReduxLayout>
      </body>
    </html>
  );
}
