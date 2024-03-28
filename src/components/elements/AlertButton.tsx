import { Badge, Button } from "@nextui-org/react";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiOutlineBellAlert } from "react-icons/hi2";

function AlertButton() {
   return (
      <Badge
         content={<GoDotFill className="text-base" />}
         shape="circle"
         color="danger"
         variant="faded"
         className="border-none bg-transparent"
      >
         <Button
            isIconOnly
            color="default"
            variant="faded"
            radius={"sm"}
            aria-label="Alert"
            className="border-none bg-transparent"
            size="md"
         >
            <span className="text-xl iconColor">
               <HiOutlineBellAlert />
            </span>
         </Button>
      </Badge>
   );
}

export default AlertButton;
