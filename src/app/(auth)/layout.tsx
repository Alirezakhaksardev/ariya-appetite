import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function RootAuthLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {

    const session = await getServerSession(authOptions);
    if (session) return redirect("/dashboard");

   return <React.Fragment>{children}</React.Fragment>;
}
