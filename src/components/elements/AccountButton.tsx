import { Button } from "@nextui-org/react";
import React from "react";
import { PiUserSquareBold } from "react-icons/pi";
import { useRouter } from 'next/navigation'

function AccountButton() {

   const router = useRouter()
   const clickHandler = () =>{
      router.push('/signup' , {scroll : false});
   }

   return (
      <Button
         color="default"
         variant="flat"
         radius={"sm"}
         aria-label="dashboard"
         className=""
         onClick={clickHandler}
      >
         <span className="flex flex-row gap-3 iconColor items-center">
            <span>حساب کاربری</span>
            <span className="text-xl">
               <PiUserSquareBold />
            </span>
         </span>
      </Button>
   );
}

export default AccountButton;
