import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import prismadb from "@/libs/prismadb";
import Image from "next/image";

const page = async () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("signin");
  if (theme?.value !== "superadmin") {
    redirect("/");
  }
  const order = await prismadb.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log(order);
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-10 grid grid-cols-3">
          {order.map((item) => (
            <div className="shadow-md rounded-lg m-10 p-5" key={item.id}>
              <h1>Product Name: {item.name}</h1>
              <h1>
                Product Image:
                <img
                  src={item.image}
                  alt="img"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </h1>
              <h1 className="line-clamp-3">Description:{item.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
