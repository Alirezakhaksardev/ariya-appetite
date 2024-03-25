import ShowLogo from "@/components/elements/ShowLogo";
import HeaderLinksMenu from "@/components/modules/HeaderLinksMenu";
import React, { useState } from "react";
import SwitchMood from "@/components/elements/SwitchMood";
import AlertButton from "@/components/elements/AlertButton";
import BarsButton from "@/components/elements/BarsButton";
import AccountButton from "@/components/elements/AccountButton";
import HeaderLinksMenuMobile from "@/components/modules/HeaderLinksMenuMobile";

function Header() {
   const [menuToggle , setMenuToggle] = useState(false)

   return (
      <header className="headerAppetiteContainer shadow-md">
         <div className="AppetiteContainer">
            <div className="flex flex-row items-center">
               <ShowLogo title="آریانا آپتایت" srcImage="/images/logo.png" />
               <HeaderLinksMenu  />
            </div>
            <div className="flex flex-row items-center gap-3">
               <BarsButton menuToggle={menuToggle} setMenuToggle ={setMenuToggle} />
               {/* <AlertButton /> */}
               <SwitchMood />
               <AccountButton/>
            </div>
         </div>
         <HeaderLinksMenuMobile menuToggle={menuToggle} />
      </header>
   );
}

export default Header;
