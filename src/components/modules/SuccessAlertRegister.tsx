import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

function SuccessAlertRegister({ name }: { name: string }) {
   const router = useRouter();
   const clickHandler = () => {
      router.push("/dashboard", { scroll: false });
   };
   return (
      <div className="flex flex-col gap-5">
         <h1 className="text-2xl lg:text-3xl font-bold">{name} عزیز</h1>
         <div className="text-zinc-300 mt-5 ">
            <p className="text-xl text-green-400">
               ثبت نام شما با موفقیت انجام شد !
            </p>
            <p className="mt-3">
               برای استفاده از خدمات ما باید به پنل مدیریت خود برید
            </p>
         </div>
         <Button
            color="success"
            variant="flat"
            radius={"sm"}
            aria-label="signin"
            className="w-full font-bold"
            type="button"
            onClick={clickHandler}
         >
            ورود به پنل مدیریت
         </Button>
      </div>
   );
}

export default SuccessAlertRegister;
