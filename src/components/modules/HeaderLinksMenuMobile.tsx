import Link from "next/link";
import React, { useEffect, useRef } from "react";

type HeaderLinksMenuMobile = {
   menuToggle: boolean;
   setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

function HeaderLinksMenuMobile({
   menuToggle,
   setMenuToggle,
}: HeaderLinksMenuMobile) {
   const refmenu = useRef<HTMLUListElement>(null);
   const refContainermenu = useRef<HTMLDivElement>(null);
   useEffect(() => {
      if (refmenu.current && refContainermenu.current) {
         const linkHeight = refmenu.current.getBoundingClientRect().height;
         if (menuToggle) {
            refContainermenu.current.style.height = `${linkHeight}px`;
         } else {
            refContainermenu.current.style.height = `0px`;
         }
      }
   }, [menuToggle]);

   return (
      <div
         className={`HeaderMobileLinks inline-block overflow-hidden lg:hidden  ${
            menuToggle ? "mb-5" : " h-0 "
         }`}
         ref={refContainermenu}
      >
         <ul
            className={`HeaderMobileLinks inline-block`}
            ref={refmenu}
         >
            <li className="links">
               <Link className="" href={""}>
                  درباره آریانا آپاتایت
               </Link>
            </li>
            <li className="links">
               <Link href={""}>خدمات</Link>
            </li>
            <li className="links">
               <Link href={""}>مقالات</Link>
            </li>
            <li className="links">
               <Link href={""}>تماس با ما</Link>
            </li>
         </ul>
      </div>
   );
}

export default HeaderLinksMenuMobile;
