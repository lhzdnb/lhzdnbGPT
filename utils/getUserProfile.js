"use server";

import { currentUser } from "@clerk/nextjs";

export default async function getUserProfile() {
  const user = await currentUser();
  console.log(user.imageUrl);
  return user.imageUrl;
}
