"use client";
import { NextUIProvider, Spinner } from "@nextui-org/react";
import { SessionProvider, useSession } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import React, { ReactNode, useEffect, useState } from "react";

type Providers = {
   children: ReactNode;
};

function Providers({ children }: Providers) {
   return (
      <SessionProvider>
         <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="system">
               {children}
            </NextThemesProvider>
         </NextUIProvider>
      </SessionProvider>
   );
}

export default Providers;
