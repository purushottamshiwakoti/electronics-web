import Login from "@/components/Login";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("signin");
  if (theme?.value === "superadmin") {
    redirect("/dashboard");
  }
  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
