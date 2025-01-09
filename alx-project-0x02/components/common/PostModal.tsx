import { CardProps } from "@/interfaces";
import { useState } from "react";

export default function PostModal(props: {
  onSubmit: (arg0: { title: string; content: string }) => void;
}) {
  function postData(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    props.onSubmit({ title, content });
  }

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded shadow-md"
      action={postData}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="title"
          name="title"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          name="content"
        ></textarea>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
