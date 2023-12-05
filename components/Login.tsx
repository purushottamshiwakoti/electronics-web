"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { setCookie } from "cookies-next";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email == "seller@gmail.com" && password == "admin") {
      setCookie("signin", "superadmin");
      toast.success("Successfully logged in ");
      router.push("/dashboard");
    } else {
      toast.error("Invalid Crediantials");
    }
  };
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="h-20vh shadow-md p-52 rounded-lg">
        <h1 className="text-red-500 font-bold">Log In</h1>
        <div className="mt-5">
          <Label htmlFor="email">Your email address</Label>
          <Input
            className="mt-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <Label htmlFor="email">Your password</Label>
          <Input
            className="mt-2 w-[30rem]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="mt-5 w-full" onClick={() => handleLogin()}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
