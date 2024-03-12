import React from "react";
import { IoHeart } from "react-icons/io5";

function Footer() {
   return (
      <div className="footerAppetiteContainer">
         <div className="AppetiteContainer justify-center">
            <p className="flex flex-row items-center gap-2">
               ساخته شده با{" "}
               <span className="heartIcon">
                  <IoHeart />
               </span>{" "}
               <span className="font-bold">آریانا آپتایت</span>
            </p>
         </div>
      </div>
   );
}

export default Footer;
