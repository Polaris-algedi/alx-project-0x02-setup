import { PostProps } from "@/interfaces";
import React from "react";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-80">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <p className="text-gray-400 text-sm mt-2">Posted by User {userId}</p>
    </div>
  );
}
