"use client";
import { validate } from "@/utils/auth";
import { useFormik } from "formik";
import BGAuth from "@/components/modules/BGAuth";
import { SignInData, SignUpData } from "@/types/user";
import { signIn } from "next-auth/react";
import { useState } from "react";
import SuccessAlertRegister from "@/components/modules/SuccessAlertRegister";
import SignUpForm from "@/components/modules/SignUpForm";
import InOut from "@/animations/InOut";
import toast from "react-hot-toast";

function SignupPage() {
   const [pageStep, setPageStep] = useState(0);
   const [nameUser, setNameUser] = useState("");

   const [isLoading, setIsLoading] = useState(false);

   async function CreateCompany(values: SignUpData) {
      setIsLoading(true);
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
         setNameUser(data.data.fullName);
         SignInCompany({
            emailOrMobile: values.email,
            password: values.password,
         });
      } 
      else if(res.status === 500){
         setIsLoading(false);
         toast.error('مشکلی در سمت سرور پیش آمده !')
      }
      else {
         setIsLoading(false);
         toast.error(data.error);
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
         setIsLoading(false);
         toast.error(res.error);
      } else {
         setPageStep(1)
         setIsLoading(false);
      }
   }

   const RegisterFormik = useFormik({
      initialValues: {
         fullName: "",
         email: "",
         password: "",
      },
      validate,
      onSubmit: (values) => {
         CreateCompany(values);
      },
   });

   const { handleSubmit, handleChange, values, errors, touched } =
      RegisterFormik;

   return (
      <div className="relative AuthForm">
         <BGAuth />
         <div className="AuthFormBox bg-opacity-50 lg:shadow-xl">
            <div className="w-full px-5">
               <div className="text-2xl font-bold mb-5">
                  {pageStep === 0 && <h1>ثبت نام در آریانا آپتایت</h1>}
               </div>
               {pageStep === 0 ? (
                  <SignUpForm
                     handleSubmit={handleSubmit}
                     handleChange={handleChange}
                     values={values}
                     errors={errors}
                     touched={touched}
                     isLoading={isLoading}
                  />
               ) : (
                  <InOut>
                     <SuccessAlertRegister name={nameUser} />
                  </InOut>
               )}
            </div>
         </div>
      </div>
   );
}

export default SignupPage;
