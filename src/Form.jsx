import React from "react";

export default function Form() {
  return (
    <div>
      <form className="space-y-4 max-w-md mx-auto mt-4">
        <input
          type="email"
          placeholder="Enter Email"
          className="px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
        />

        <div className="flex">
          <input
            type="checkbox"
            className="w-4"
          />
          <label className="text-sm ml-4">Remember me</label>
        </div>

        <button
          type="button"
          className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm font-medium bg-blue-500 rounded hover:bg-blue-600 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
