import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function ButtonRegisterForm({ isLoading }: { isLoading: boolean }) {
   return (
      <div className="my-2 flex flex-col gap-3">
         <Button
            color="success"
            variant="flat"
            radius={"sm"}
            aria-label="signin"
            className="w-full font-bold"
            type="submit"
            isLoading={isLoading}
         >
            ثبت نام
         </Button>
         <div className="flex flex-col gap-3">
            <p className="text-zinc-500">
               قبلا &nbsp;
               <span className="dark:text-zinc-400 font-bold text-zinc-600">
                  ثبت نام
               </span>
               &nbsp; کرده بودی ؟
            </p>
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
                  <Link href={"/signin"} scroll={false} className="flex justify-center items-center w-full h-full">
                     برو به صفحه ورود
                  </Link>
               </Button>
            </div>
         </div>
      </div>
   );
}

export default ButtonRegisterForm;
