import { FormikFormSignUpTpye } from "@/types/user";
import React from "react";
import InputGroup from "./InputGroup";
import ButtonRegisterForm from "./ButtonRegisterForm";



function SignUpForm({
   handleSubmit,
   handleChange,
   values,
   errors,
   touched,
   isLoading
}: FormikFormSignUpTpye & {isLoading : boolean}) {
   return (
      <form
         className="w-full flex flex-col mt-10 gap-3"
         onSubmit={handleSubmit}
      >
         <InputGroup
            name="fullName"
            label="نام ونام خانوادگی :"
            autoFocus={true}
            value={values.fullName}
            touched={touched.fullName}
            errors={errors.fullName}
            handleChange={handleChange}
            type="text"
         />
         <InputGroup
            name="email"
            label="ایمیل شما :"
            value={values.email}
            touched={touched.email}
            errors={errors.email}
            handleChange={handleChange}
            type={"email"}
         />

         <InputGroup
            type={"passwordSignUP"}
            name="password"
            label="پسورد :"
            value={values.password}
            touched={touched.password}
            errors={errors.password}
            handleChange={handleChange}
         />

         <ButtonRegisterForm isLoading={isLoading} />
      </form>
   );
}

export default SignUpForm;
