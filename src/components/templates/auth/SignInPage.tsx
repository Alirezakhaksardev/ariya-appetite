"use client";
import BGAuth from "@/components/modules/BGAuth";
import SignInForm from "@/components/modules/SignInForm";
import { SignInData } from "@/types/user";
import { validateLogin } from "@/utils/auth";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function SignInPage() {

   const [isLoading, setIsLoading] = useState(false);
   const router = useRouter()
   const LoginFormik = useFormik({
      initialValues: {
         emailOrMobile: "",
         password: "",
      },
      validate: validateLogin,
      onSubmit: (values) => {
         setIsLoading(true)
         SubmitHandler(values);
      },
   });
   async function SubmitHandler(values: SignInData) {
      const { emailOrMobile, password } = values;
      const res = await signIn("credentials", {
         emailOrMobile,
         password,
         redirect: false,
      });
      if (res?.error) {
         setIsLoading(false)
         toast.error(res?.error);
      } else {
         // redirect("/dashboard");
         router.refresh()
      }
   }
   const { handleSubmit, handleChange, values, errors, touched } = LoginFormik;

   return (
      <div className="relative AuthForm">
         <BGAuth />
         <div className="AuthFormBox bg-opacity-50 lg:shadow-xl">
            <div className="w-full px-5">
               <div className="text-2xl font-bold mb-5">
                  <h1> ورود به حساب کاربری </h1>
               </div>
               <SignInForm
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                  isLoading={isLoading}
               />
            </div>
         </div>
      </div>
   );
}

export default SignInPage;
