import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function RootDashBoardLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {

    const session = await getServerSession(authOptions);
    if (!session) return redirect("/signin");

   return <div>{children}</div>;
}
