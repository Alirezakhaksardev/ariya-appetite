"use client";
import Opacity from "@/animations/Opacity";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { GiNightSky } from "react-icons/gi";
import { IoIosClock } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

type Day = {
   text: string;
   icon?: JSX.Element;
};

function header() {
   const [date, setDate] = useState(new Date());

   const [day, setDay] = useState<Day>({
      text: "",
   });
   useEffect(() => {
      let timer = setInterval(() => {
         setDate(new Date());
         if (date.getHours() < 5 && date.getHours() >= 0) {
            setDay({ text: "بامدادتان نکو" });
         }
         if (date.getHours() < 12 && date.getHours() >= 5) {
            setDay({ text: "سپیده دمتان نکو" });
         }
         if (date.getHours() < 17 && date.getHours() >= 12) {
            setDay({ text: "نیم روزتان نکو" });
         }
         if (date.getHours() < 18 && date.getHours() >= 17) {
            setDay({ text: "پس از نیمروزتان نکو" });
         }
         if (date.getHours() < 24 && date.getHours() >= 18) {
            setDay({ text: "شامگاهتان نکو", icon: <GiNightSky /> });
         }
      }, 1000);
      return function cleanup() {
         clearInterval(timer);
      };
   }, []);

   return (
      <div className="HeaderDashboard">
         <div>
            <div className="TextWelcome">
               <p>
                  سلام؛ &nbsp; <span className="WN">آریا خاکسار </span>
               </p>
               {day.text && (
                  <Opacity>
                     <p className="transition-all ease-in day flex flex-row">
                        {day.icon && (
                           <span>
                              {day.icon}
                           </span>
                        )}
                        <span>{day.text}</span>
                     </p>
                  </Opacity>
               )}
            </div>
         </div>
         <div className="DateBox">
            <p>
               <span>
                  <MdOutlineDateRange />
               </span>
               تاریخ : {date.toLocaleDateString("fa-IR")}
            </p>
            <p className="p_clock">
               <span>
                  <FaRegClock />
               </span>
               ساعت : {date.toLocaleTimeString("fa-IR")}
            </p>
         </div>
      </div>
   );
}

export default header;
