"use client";
import SignUpForm from "@/components/modules/SignUpForm";
import { validate } from "@/utils/auth";
import { useFormik } from "formik";
import BGAuth from "@/components/modules/BGAuth";

function SignupPage() {
   const RegisterFormik = useFormik({
      initialValues: {
         fullName: "",
         email: "",
         password: "",
      },
      validate,
      onSubmit: (values) => {
         console.log(values);
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
                  <h1>ثبت نام در آریانا آپتایت</h1>
               </div>
               <SignUpForm
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

export default SignupPage;
