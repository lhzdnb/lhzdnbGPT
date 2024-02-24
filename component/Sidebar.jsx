import React from "react";
import SidebarHeader from "@/component/SidebarHeader";
import NavLinks from "@/component/NavLinks";
import MemberProfile from "@/component/MemberProfile";

function Sidebar(props) {
  return (
    <div className="px-4 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]">
      {/* first row */}
      <SidebarHeader />
      {/* second row */}
      <NavLinks />
      {/* third row */}
      <MemberProfile />
    </div>
  );
}

export default Sidebar;
