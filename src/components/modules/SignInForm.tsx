import { FormikFormSignInTpye } from "@/types/user";
import React from "react";
import InputGroup from "./InputGroup";
import ButtonLoginForm from "./ButtonLoginForm";

function SignInForm({
   handleSubmit,
   values,
   touched,
   errors,
   handleChange,
   isLoading
}: FormikFormSignInTpye & {isLoading : boolean}) {
   return (
      <form
         className="w-full flex flex-col mt-10 gap-3"
         onSubmit={handleSubmit}
      >
         <InputGroup
            name="emailOrMobile"
            label="ایمیل یا شماره موبایل :"
            value={values.emailOrMobile}
            touched={touched.emailOrMobile}
            errors={errors.emailOrMobile}
            handleChange={handleChange}
            type={"text"}
            autoFocus
         />

         <InputGroup
            type={"password"}
            name="password"
            label="پسورد :"
            value={values.password}
            touched={touched.password}
            errors={errors.password}
            handleChange={handleChange}
         />
         <ButtonLoginForm isLoading={isLoading} />
      </form>
   );
}

export default SignInForm;
