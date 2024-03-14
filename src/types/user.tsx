import { FormikErrors, FormikTouched } from "formik";

export type SignInData = {
   emailOrMobile: string;
   password : string;
}
export type SignUpData = {
   email: string;
   password : string;
   fullName: string;
};

export type FormikFormSignUpTpye = {
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

export type FormikFormSignInTpye = {
   handleChange: {
      (e: React.ChangeEvent<SignInData>): void;
      <T_1 = string | React.ChangeEvent<SignInData>>(
         field: T_1
      ): T_1 extends React.ChangeEvent<SignInData>
         ? void
         : (e: string | React.ChangeEvent<SignInData>) => void;
   };
   handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
   values: SignInData;
   errors: FormikErrors<SignInData>;
   touched: FormikTouched<SignInData>;
};