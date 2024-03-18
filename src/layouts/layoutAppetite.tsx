"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { Spinner } from "@nextui-org/react";
import Opacity from "@/animations/Opacity";

type LayoutAppetite = {
   children: ReactNode;
};

function LayoutAppetite({ children }: LayoutAppetite) {
   const { data: session, status } = useSession();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (status == "unauthenticated") setLoading(false);
      if (status == "authenticated") setLoading(false);
      else if (status == "loading") setLoading(true);
   }, [status]);

   return (
      <>
         <Header />
         <main
            className={`transition-all ease-in containe mx-auto ${
               loading ? "flex justify-center items-center" : " "
            }`}
            style={loading ? { minHeight: "84.5vh" } : {}}
         >
            {loading ? (
               <div className="w-full h-full flex justify-center transition-all ease-in items-center">
                  <Spinner label="در حال بارگذاری سایت" color="warning" />
               </div>
            ) : (
               <Opacity>{children}</Opacity>
            )}
            <Toaster />
         </main>
         <Footer />
      </>
   );
}

export default LayoutAppetite;
