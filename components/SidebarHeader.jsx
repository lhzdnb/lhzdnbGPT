import React from "react";
import { RiOpenaiLine } from "react-icons/ri";
import ThemeToggle from "@/components/ThemeToggle";

function SidebarHeader(props) {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <RiOpenaiLine className="w-10 h-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary mr-4">lhzdnbGPT</h2>
      <ThemeToggle />
    </div>
  );
}

export default SidebarHeader;
