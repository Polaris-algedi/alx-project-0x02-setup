import { UserProps } from "@/interfaces";
import React from "react";

export default function UserCard({ id, name, email, address }: UserProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-80">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-400 text-sm mt-2">Address: {address.city}</p>
      <p className="text-gray-400 text-sm mt-2">ID: {id}</p>
    </div>
  );
}
