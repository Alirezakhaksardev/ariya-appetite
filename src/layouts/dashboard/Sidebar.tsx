"use client";
import { BiHomeAlt } from "react-icons/bi";
import { Button } from "@nextui-org/react";
import {
   FaArrowDownShortWide,
   FaArrowDownWideShort,
   FaArrowUpWideShort,
} from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Opacity from "@/animations/Opacity";

function Sidebar() {
   const [toggleSidebar, setToggleSidebar] = useState(true);
   const refmenu = useRef<HTMLUListElement>(null);
   const refContainermenu = useRef<HTMLDivElement>(null);
   useEffect(() => {
      if (refmenu.current && refContainermenu.current) {
         const linkWidth = refmenu.current.getBoundingClientRect().width;
         let w = linkWidth + 25;
         refContainermenu.current.style.width = `${w}px`;
      }
   }, [toggleSidebar]);

   return (
      <div
         className="SidebarLayout transition-all ease-in"
         ref={refContainermenu}
      >
         <div
            className={`ToggleSideBar transition-all ease-in ${
               !toggleSidebar && "justify-center"
            }`}
         >
            <Button
               color="default"
               variant="flat"
               radius={"sm"}
               aria-label="dashboard"
               className="border-none"
               size="md"
               isIconOnly
               onClick={() => setToggleSidebar(!toggleSidebar)}
            >
               {toggleSidebar ? (
                  <span className="IconSideBar">
                     <FaArrowDownWideShort />
                  </span>
               ) : (
                  <span className="IconSideBar_Open">
                     <FaArrowUpWideShort />
                  </span>
               )}
            </Button>
         </div>
         <ul ref={refmenu}>
            <li>
               <Button
                  color="default"
                  variant="ghost"
                  radius={"sm"}
                  aria-label="dashboard"
                  className="border-none"
                  size="md"
                  isIconOnly={!toggleSidebar}
               >
                  <span className="text-lg">
                     <BiHomeAlt />
                  </span>
                  {toggleSidebar && (
                     <Opacity>
                        <span>صفحه اصلی داشبورد</span>
                     </Opacity>
                  )}
               </Button>
            </li>
         </ul>
      </div>
   );
}

export default Sidebar;
