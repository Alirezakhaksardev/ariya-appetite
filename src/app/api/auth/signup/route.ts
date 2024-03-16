import Company from "@/models/Company";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { p2e } from "@/utils/replaceNumber";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
   try {
      await connectDB();
      const { fullName, email, password } = await req.json();

      //  Check Data
      if (!fullName || !email || !password) {
         return NextResponse.json(
            { error: "لطفا اطلاعات معتبر وارد کنید" },
            { status: 422 }
         );
      }
      const ePassword = p2e(password);
      const LowerCaseEmail = p2e(email.toLocaleLowerCase())
      // check email
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(LowerCaseEmail)) {
         return NextResponse.json(
            { error: "لطفا ایمیل معتبر وارد کنید !" },
            { status: 422 }
         );
      }
      const existingCampany = await Company.findOne({ email : LowerCaseEmail });

      if (existingCampany) {
         return NextResponse.json(
            { error: "این حساب کاربری وجود دارد" },
            { status: 422 }
         );
      }
      const hashedPassword = await hashPassword(ePassword);

      const newCampany = await Company.create({
         fullName: fullName,
         email: LowerCaseEmail,
         password: hashedPassword,
      });
      return NextResponse.json(
         { message: "حساب کاربری ایجاد شد !" , data : newCampany},
         { status: 201 }
      );
   } catch (err) {
      console.log(err);
      return NextResponse.json(
         { err: "مشکلی در سرور رخ داده است" },
         { status: 500 }
      );
   }
}
