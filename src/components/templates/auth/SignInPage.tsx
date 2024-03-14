"use client";
import BGAuth from "@/components/modules/BGAuth";
import SignInForm from "@/components/modules/SignInForm";
import { validateLogin } from "@/utils/auth";
import { useFormik } from "formik";
import React from "react";

function SignInPage() {
   const LoginFormik = useFormik({
      initialValues: {
         emailOrMobile: "",
         password: "",
      },
      validate : validateLogin,
      onSubmit: (values) => {
         console.log(values);
      },
   });

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
               />
            </div>
         </div>
      </div>
   );
}

export default SignInPage;
