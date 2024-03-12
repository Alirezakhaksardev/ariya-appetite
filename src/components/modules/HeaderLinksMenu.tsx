import Link from "next/link";
import React from "react";

function HeaderLinksMenu() {
   return (
      <ul className="HeaderLinks mr-5">
         <li className="links">
            <Link href={""}>درباره آریانا آپاتایت</Link>
         </li>
         <li className="links">
            <Link href={""}>خدمات</Link>
         </li>
         <li className="links">
            <Link href={""}>مقالات</Link>
         </li>
         <li className="links">
            <Link href={""}>تماس با ما</Link>
         </li>
      </ul>
   );
}

export default HeaderLinksMenu;
