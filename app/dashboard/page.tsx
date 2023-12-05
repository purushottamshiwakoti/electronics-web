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
  const order = await prismadb.purchase.findMany({
    include: {
      product: true,
      user: true,
    },
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
              <h1>Product Name: {item.product.name}</h1>
              <h1>
                Product Image:
                <img
                  src={item.product.image}
                  alt="img"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </h1>
              <h1>Purhased By:{item.user.name}</h1>
              <h1>Purhased At:{JSON.stringify(item.user.createdAt)}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
