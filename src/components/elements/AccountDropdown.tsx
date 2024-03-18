import React from "react";
import {
   Dropdown,
   DropdownTrigger,
   DropdownMenu,
   DropdownSection,
   DropdownItem,
   Button,
   User,
} from "@nextui-org/react";
import { PiUserSquareBold } from "react-icons/pi";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import Link from "next/link";
export default function AccountDropdown({
   name,
   email,
   image,
}: {
   name: string;
   email: string;
   image: string;
}) {
   return (
      <Dropdown
         showArrow
         radius="sm"
         classNames={{
            base: "border-none", // change arrow background
            content: "p-0 border-small border-divider bg-background",
         }}
      >
         <DropdownTrigger>
            <Button
               color="default"
               variant="flat"
               radius={"sm"}
               aria-label="dashboard"
               className=""
            >
               <span className="flex flex-row gap-3 iconColor items-center">
                  <span>حساب کاربری</span>
                  <span className="text-xl">
                     <PiUserSquareBold />
                  </span>
               </span>
            </Button>
         </DropdownTrigger>
         <DropdownMenu
            aria-label="Custom item styles"
            disabledKeys={["profile"]}
            className="p-3"
            itemClasses={{
               base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
               ],
            }}
         >
            <DropdownSection aria-label="Profile & Actions" showDivider>
               <DropdownItem
                  textValue=" "
                  isReadOnly
                  key="profile"
                  className="h-14 gap-2 opacity-100"
               >
                  <User
                     name={name ? name : "مشکل در دریافت اطلاعات"}
                     description={email ? email : "مشکل در دریافت اطلاعات"}
                     classNames={{
                        name: `text-default-600 font-bold ${
                           name.length == 0 && "text-red-400"
                        }`,
                        description: `text-default-500 mt-1 ${
                           email.length == 0 && "text-red-400"
                        }`,
                     }}
                     avatarProps={{
                        size: "sm",
                        src: image == "/" ? "" : image,
                     }}
                  />
               </DropdownItem>
               <DropdownItem key="dashboard" className="mt-1 flex" textValue=" ">
                  <Link href={"/dashboard"} className="block w-full h-full">
                     پنل مدیریت
                  </Link>
               </DropdownItem>
               <DropdownItem
                  key="settings"
                  textValue=" "
                  onClick={() => redirect("/dashboard/setting")}
                  className="flex"
               >
                <Link href={"/dashboard/setting"} className="block w-full h-full"> تنظیمات</Link>
                 
               </DropdownItem>
            </DropdownSection>

            <DropdownSection aria-label="Help & Feedback">
               <DropdownItem key="help_and_feedback" className="flex" textValue=" ">
                  <Link href={"/dashboard/help-feed"} className="block w-full h-full">
                     پشتیبانی و ثبت بازخورد
                  </Link>
               </DropdownItem>
               <DropdownItem
                  key="logout"
                  color="danger"
                  textValue=" "
                  onClick={() => signOut()}
               >
                  <span className="transition-all ease-in text-red-400 hover:text-red-500">
                     خروج از حساب
                  </span>
               </DropdownItem>
            </DropdownSection>
         </DropdownMenu>
      </Dropdown>
   );
}
