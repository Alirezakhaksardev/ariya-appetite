import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { Spinner } from "@nextui-org/react";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";

export default async function RootDashBoardLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const session = await getServerSession(authOptions);
   if (!session) return redirect("/signin");
   return <DashboardLayout>{children}</DashboardLayout>;
}
