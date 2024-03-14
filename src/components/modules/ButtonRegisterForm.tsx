import { Button } from "@nextui-org/react";
import React from "react";

function ButtonRegisterForm() {
   return (
      <div className="my-2 flex flex-col gap-3">
         <Button
            color="success"
            variant="flat"
            radius={"sm"}
            aria-label="signin"
            className="w-full"
            type="submit"
         >
            ثبت نام
         </Button>
         <div className="flex flex-col gap-3">
            <p className="text-zinc-500">آیا قبلا ثبت نام کرده اید؟</p>
            <Button
            color="default"
            variant="ghost"
            radius={"sm"}
            aria-label="ToLogin"
            className="w-full"
            type="button"
         >
            برو به صفحه ورود
         </Button>
         </div>
      </div>
   );
}

export default ButtonRegisterForm;
