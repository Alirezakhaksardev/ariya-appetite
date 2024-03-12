import type { Metadata } from "next";
import "./globals.css";
import { KalamehWeb } from "@/utils/fonts";
import Providers from "@/providers/Providers";
import LayoutAppetite from "@/layouts/layoutAppetite";

export const metadata: Metadata = {
   title: "آریانا آپتایت | خدمات منو آنلاین رستوارن و کافه",
   description: "منو آنلاین کافه یا رستوارانت رو با آریانا آپتایت بساز",
   icons: {
      icon: ["/_favicon.ico"],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="fa" dir="rtl">
         <body className={`${KalamehWeb.className}`}>
            <Providers>
               <LayoutAppetite>
                  {children}
               </LayoutAppetite>
            </Providers>
         </body>
      </html>
   );
}
