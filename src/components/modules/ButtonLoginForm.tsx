import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function ButtonLoginForm() {
   return (
      <div className="my-8 mb-3 flex flex-col gap-3">
         <Button
            color="success"
            variant="flat"
            radius={"sm"}
            aria-label="signin"
            className="w-full font-bold"
            type="submit"
         >
            ورود به حساب کاربری
         </Button>
         <div className="flex flex-col gap-3">
            <p className="text-zinc-500">
               <span className="dark:text-zinc-400 font-bold text-zinc-600">
                  رمزتو
               </span>{" "}
               فراموش کردی ؟ &nbsp; یا اصلا قبلا{" "}
               <span className="dark:text-zinc-400 font-bold text-zinc-600">
                  ثبت نام
               </span>{" "}
               کردی ؟
            </p>
            <div className="flex flex-row gap-2">
               <div className="w-full">
                  <Link href={"/"} scroll={false}>
                     <Button
                        color="default"
                        variant="ghost"
                        radius={"sm"}
                        aria-label="ToLogin"
                        className="w-full"
                        type="button"
                        isDisabled
                     >
                        بازیابی پسورد (بزودی)
                     </Button>
                  </Link>
               </div>
               <div className="w-full">
                  <Link href={"/signup"} scroll={false}>
                     <Button
                        color="default"
                        variant="ghost"
                        radius={"sm"}
                        aria-label="ToLogin"
                        className="w-full"
                        type="button"
                     >
                        برو به صفحه ثبت نام
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ButtonLoginForm;
