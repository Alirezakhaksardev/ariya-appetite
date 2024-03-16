import { SignInData, SignUpData } from "@/types/user";
import { signIn } from "next-auth/react";

async function CreateCompany(values: SignUpData) {
   const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
         fullName: values.fullName,
         email: values.email,
         password: values.password,
      }),
      headers: { "Content-Type": "apllication/json" },
   });
   const data = await res.json();
   if (res.status === 201) {
      return {status : 'success' , data : data}
   } else {
      return {status : 'error' , message : data.error}
   }
}



async function SignInCompany(values: SignInData) {
    const { emailOrMobile, password } = values;
    const res = await signIn("credentials", {
       emailOrMobile,
       password,
       redirect: false,
    });
    if (res?.error) {
      return {status : 'error' , message : res.error}
    } else {
       return {status : 'success' , message : "ورود کاربر با موفقیت انجام شد !"}
    }
 }

export {SignInCompany , CreateCompany}