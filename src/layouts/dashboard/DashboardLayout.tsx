import React from "react";
import Header from "./Header";

function DashboardLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="w-full">
        <Header />
         <main className="">{children}</main>
      </div>
   );
}

export default DashboardLayout;
