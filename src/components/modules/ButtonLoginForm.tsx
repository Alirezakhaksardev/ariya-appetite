import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function ButtonLoginForm({ isLoading }: { isLoading: boolean }) {
   return (
      <div className="my-8 mb-3 flex flex-col gap-3">
         <Button
            color="success"
            variant="flat"
            radius={"sm"}
            aria-label="signin"
            className="w-full font-bold"
            type="submit"
            isLoading={isLoading}
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
                  <Button
                     color="default"
                     variant="ghost"
                     radius={"sm"}
                     aria-label="ToLogin"
                     className="w-full flex p-0 py-0 justify-center items-center"
                     type="button"
                     isDisabled={isLoading}
                  >
                     <Link href={"/get-new-password"} scroll={false} className="flex justify-center items-center w-full h-full">
                        بازیابی پسورد (بزودی)
                     </Link>
                  </Button>
               </div>
               <div className="w-full">
                  <Button
                     color="default"
                     variant="ghost"
                     radius={"sm"}
                     aria-label="ToLogin"
                     className="w-full flex p-0 py-0 justify-center items-center"
                     type="button"
                     isDisabled={isLoading}
                  >
                     <Link
                        href={"/signup"}
                        scroll={false}
                        className="flex justify-center items-center w-full h-full"
                     >
                        برو به صفحه ثبت نام
                     </Link>
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ButtonLoginForm;
