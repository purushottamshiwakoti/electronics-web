"use client";
import React from "react";
import { Button } from "./ui/button";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("signin");
    toast.success("Successfully logged out");
    router.push("/");
  };
  return (
    <div className="w-[15rem] shadow-lg h-[100vh] p-10">
      <h2>Wlcome Admin </h2>
      <div className="space-y-5 mt-5">
        <Link href={"/dashboard"}>
          <Button className="w-full">Orders</Button>
        </Link>
        <Link href={"/products"}>
          <Button className="w-full  mt-5">Products</Button>
        </Link>
        <Button className="w-full" onClick={() => handleLogout()}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
