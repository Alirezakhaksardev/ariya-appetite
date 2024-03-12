"use client"
import { Button } from "@nextui-org/react";
import React from "react";
import { FaBars } from "react-icons/fa";
type BarsButton = {
   menuToggle: boolean;
   setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
function BarsButton({menuToggle , setMenuToggle} : BarsButton) {
   return (
      <Button
         color="default"
         variant="faded"
         radius={"sm"}
         aria-label="dashboard"
         className="lg:hidden border-none"
         size="md"
         isIconOnly
         onClick={() => setMenuToggle(!menuToggle)}
      >
         <span className="text-xl iconColor">
            <FaBars />
         </span>
      </Button>
   );
}

export default BarsButton;
