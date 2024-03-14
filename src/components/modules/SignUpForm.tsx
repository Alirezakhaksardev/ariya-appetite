import { SignUpData } from "@/types/user";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import InputGroup from "./InputGroup";
import ButtonRegisterForm from "./ButtonRegisterForm";

type SignUpForm = {
   handleChange: {
      (e: React.ChangeEvent<SignUpData>): void;
      <T_1 = string | React.ChangeEvent<SignUpData>>(
         field: T_1
      ): T_1 extends React.ChangeEvent<SignUpData>
         ? void
         : (e: string | React.ChangeEvent<SignUpData>) => void;
   };
   handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
   values: SignUpData;
   errors: FormikErrors<SignUpData>;
   touched: FormikTouched<SignUpData>;
};

function SignUpForm({
   handleSubmit,
   handleChange,
   values,
   errors,
   touched,
}: SignUpForm) {
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
            type={"password"}
            name="password"
            label="پسورد :"
            value={values.password}
            touched={touched.password}
            errors={errors.password}
            handleChange={handleChange}
         />

         <ButtonRegisterForm />
      </form>
   );
}

export default SignUpForm;
