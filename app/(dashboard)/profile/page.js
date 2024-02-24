import React from "react";
import { UserProfile } from "@clerk/nextjs";

function ProfilePage(props) {
  return (
    <div className="flex items-center justify-center">
      <UserProfile />
    </div>
  );
}

export default ProfilePage;
