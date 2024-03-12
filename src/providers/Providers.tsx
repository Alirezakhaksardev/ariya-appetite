"use client";
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

import React, { ReactNode } from "react";

type Providers = {
   children: ReactNode;
};

function Providers({ children }: Providers) {
   return (
      <NextUIProvider>
         <NextThemesProvider attribute="class" defaultTheme="system">
            {children}
         </NextThemesProvider>
      </NextUIProvider>
   );
}

export default Providers;
