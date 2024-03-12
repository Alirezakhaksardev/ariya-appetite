import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

function SwitchMood() {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

   useEffect(() => {
      setMounted(true);
   }, []);

   return (
      <Button
         isIconOnly
         color="default"
         variant="faded"
         radius={"sm"}
         aria-label="mood"
         className="border-none"
         onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
         isLoading={!mounted}
         size="md"
      >
         <span className="iconColorMood">
            {
                theme == "dark" ?
                <MdWbSunny  className="text-lg" /> :
                <BsFillMoonStarsFill />
            }
         </span>
      </Button>
   );
}

export default SwitchMood;
