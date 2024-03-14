import TopDownSlow from "@/animations/TopDownSlow";
import Image from "next/image";
import React from "react";

function BGAuth() {
   return (
      <>
         <span className="absolute top-5 left-10 lg:left-[10rem] xl:left-[23rem] lg:top-0 -z-10">
            <TopDownSlow y={[0, 10, 0]}>
               <Image
                  src={"/images/patt/Kabab_01.png"}
                  alt="Kabab_01"
                  width={1080}
                  height={1080}
                  className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px]"
               />
            </TopDownSlow>
         </span>
         <span className="absolute bottom-0 left-0 lg:left-[0rem] xl:left-[0rem] lg:bottom-0  -z-10">
            <Image
               src={"/images/patt/kotlet.png"}
               alt="kotlet"
               width={1080}
               height={1080}
               className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] "
            />
         </span>
         <span className="absolute bottom-10 right-10 -z-10">
            <TopDownSlow y={[0, -20, 0]}>
               <Image
                  src={"/images/patt/kabab.png"}
                  alt="kabab"
                  width={1080}
                  height={1080}
                  className="hidden lg:inline-block lg:w-[200px] lg:h-[200px]"
               />
            </TopDownSlow>
         </span>
      </>
   );
}

export default BGAuth;
