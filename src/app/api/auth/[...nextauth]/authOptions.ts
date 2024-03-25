import Company from "@/models/Company";
import { SignInData } from "@/types/user";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { p2e } from "@/utils/replaceNumber";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
   session: { strategy: "jwt" },
   providers: [
      CredentialsProvider({
         async authorize(credentials) {
            const { emailOrMobile, password } = credentials as SignInData;
            // const user = { id: 0, email: "", phone: "" };
            try {
               await connectDB();
            } catch (err) {
               throw new Error("مشکلی در سرور رخ داده است !");
            }
            // Check valid Data
            if (!emailOrMobile || !password)
               throw new Error("لطفا اطلاعات معتبر وارد کنید !");

            const ePassword = p2e(password);

            if (
               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailOrMobile)
            ) {
               let phone: string = p2e(emailOrMobile);
               if (phone.length == 11) {
                  phone = phone.slice(1);
               }
               const company = await Company.findOne({ phone });
               if (!company)
                  throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید !");
               const isValid = await verifyPassword(
                  ePassword,
                  company.password
               );
               if (!isValid)
                  throw new Error("شماره تلفن یا رمز عبور اشتباه است!");
               // Success To Login
               //    user.id = +company._id;
               //    user.phone = phone;
               return {
                  name: company.fullName,
                  email: company.email,
                  // phone: phone,
                  image: company.companyProfile,
               };
            }

            const email = p2e(emailOrMobile.toLocaleLowerCase());
            // Check Exist User
            const company = await Company.findOne({ email });
            if (!company)
               throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید !");
            // Check password
            const isValid = await verifyPassword(ePassword, company.password);
            if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است!");
            // Success To Login
            // user.id = +company._id;
            // user.email = email;
            return {
               name: company.fullName,
               email,
               image: company.companyProfile,
               // phone: company.phone ? "" : "",
            };
         },
      }),
   ],
};
