import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="w-full">
         <Header />
         <main className="MainBoxLayoutDashboard">
            <Sidebar />
            <div className="">{children}</div>
         </main>
      </div>
   );
}

export default DashboardLayout;
