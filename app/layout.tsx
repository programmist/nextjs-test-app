import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"], // not necessary for "variable font"
});
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"], // not necessary for "variable font"
});

export const poppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <GoogleAnalyticsScript />
      <body className={roboto.className}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
