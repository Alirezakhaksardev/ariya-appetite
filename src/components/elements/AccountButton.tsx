import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { GoPasskeyFill } from "react-icons/go";
import { Button, Spinner } from "@nextui-org/react";
import Opacity from "@/animations/Opacity";
import AccountDropdown from "./AccountDropdown";
import Link from "next/link";

function AccountButton() {
   const [isLoading, setIsLoading] = useState(true);
   const [isLogin, setIsLogin] = useState(false);
   const [user, setUser] = useState({
      name: "",
      image: "",
      email: "",
   });
   const { data: session, status } = useSession();
   useEffect(() => {
      if (status == "unauthenticated") {
         setIsLoading(false);
         setIsLogin(false);
      }
      if (status == "authenticated") {
         setIsLoading(false);
         setIsLogin(true);
         console.log(session.user);
         setUser({
            name: session.user?.name ? session.user?.name : "",
            image: session.user?.image ? session.user?.image : "",
            email: session.user?.email ? session.user?.email : "",
         });
      } else if (status == "loading") setIsLoading(true);
   }, [status]);

   if (isLoading) return <Spinner size="sm" color="default" />;

   return (
      <Opacity>
         {isLogin ? (
            <AccountDropdown
               name={user.name}
               image={user.image}
               email={user.email}
            />
         ) : (
            <Button
               color="default"
               variant="flat"
               radius={"sm"}
               aria-label="dashboard"
               className="flex p-0 py-0 justify-center items-center"
               isLoading={isLoading}
               isIconOnly={isLoading}
            >
               <Link href={'/signin'} scroll={false} className="flex justify-center px-5 items-center w-full h-full">
                  <span className="flex flex-row gap-3 iconColor items-center">
                     <span>ورود / ثبت نام</span>
                     <span className="text-xl">
                        <GoPasskeyFill />
                     </span>
                  </span>
               </Link>
            </Button>
         )}
      </Opacity>
   );
}

export default AccountButton;
