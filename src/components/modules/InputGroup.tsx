import React, { useState } from "react";
import { passwordScore } from "@/utils/auth";
import { Progress } from "@nextui-org/react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface InputGroup {
   name: string;
   value: string;
   handleChange: {
      (e: React.ChangeEvent<any>): void;
      <T_1 = string | React.ChangeEvent<any>>(
         field: T_1
      ): T_1 extends React.ChangeEvent<any>
         ? void
         : (e: string | React.ChangeEvent<any>) => void;
   };
   touched?: boolean | undefined;
   errors?: string | undefined;
   autoFocus?: boolean | undefined;
   label: string;
   type: "text" | "email" | "password" | "passwordSignUP";
}

function InputGroup({
   name,
   label,
   type,
   value,
   handleChange,
   touched,
   errors,
   autoFocus = false,
}: InputGroup) {
   const [togglePassword, setTogglePassword] = useState(false);
   
   if (type == "password") {

      return (
         <div className="InputGroup">
            <label htmlFor="passsword" className="block">
               {label}
            </label>
            <div className="relative">
               <input
                  type={togglePassword ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={value}
                  className={`errorOutline ${
                     touched && errors
                        ? "transition-all ease-in outline-red-400"
                        : "outline-zinc-800"
                  } `}
               />
               <span
                  className="absolute left-3 top-1/2 transition-all ease-in -translate-y-1/2 px-2 p-1 dark:bg-zinc-700 dark:active:bg-zinc-600 rounded-md
                  cursor-pointer bg-zinc-200 active:bg-zinc-300"
                  onClick={() => setTogglePassword(!togglePassword)}
               >
                  {!togglePassword ? <FaRegEye /> : <FaRegEyeSlash />}
               </span>
            </div>
            <div
               className={`transition-all ease-in h-0 ${
                  touched && errors ? "h-5" : " "
               }`}
            >
               {touched && errors ? (
                  <p className="text-sm text-red-400">{errors}</p>
               ) : null}
            </div>
         </div>
      );
   }

   if (type == "passwordSignUP") {
      const { passwordPercent, passwordColor, passwordStatus } =
         passwordScore(value);
      return (
         <div className="InputGroup">
            <label htmlFor="passsword" className="block">
               {label}
            </label>
            <div className="relative">
               <input
                  type={togglePassword ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={value}
                  className={`errorOutline ${
                     touched && errors
                        ? "transition-all ease-in outline-red-400"
                        : "outline-zinc-800"
                  } `}
               />
               <span
                  className="absolute left-3 top-1/2 transition-all ease-in -translate-y-1/2 px-2 p-1 dark:bg-zinc-700 dark:active:bg-zinc-600 rounded-md
                  cursor-pointer bg-zinc-200 active:bg-zinc-300"
                  onClick={() => setTogglePassword(!togglePassword)}
               >
                  {!togglePassword ? <FaRegEye /> : <FaRegEyeSlash />}
               </span>
            </div>

            <Progress
               size="sm"
               radius="sm"
               classNames={{
                  base: "w-full",
                  track: "drop-shadow-md border border-default",
                  // indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600 select-none",
                  value: "text-foreground/60",
               }}
               color={passwordColor}
               label={`میزان امنیت پسورد شما : ${passwordStatus}`}
               value={passwordPercent}
               showValueLabel={false}
            />

            <div
               className={`transition-all ease-in h-0 ${
                  touched && errors ? "h-5" : " "
               }`}
            >
               {touched && errors ? (
                  <p className="text-sm text-red-400">{errors}</p>
               ) : null}
            </div>
         </div>
      );
   }

   return (
      <div className="InputGroup">
         <label htmlFor={name} className="block">
            {label}
         </label>
         <input
            type={type}
            id={name}
            name={name}
            autoFocus={autoFocus}
            onChange={handleChange}
            value={value}
            className={`errorOutline ${
               touched && errors
                  ? "transition-all ease-in outline-red-400"
                  : "outline-zinc-800"
            } `}
         />
         <div
            className={`transition-all ease-in h-0 ${
               touched && errors ? "h-5" : " "
            }`}
         >
            {touched && errors ? (
               <p className="text-sm text-red-400">{errors}</p>
            ) : null}
         </div>
      </div>
   );
}

export default InputGroup;
