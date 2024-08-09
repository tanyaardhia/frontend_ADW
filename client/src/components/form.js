"use client";

import React from "react";

export default function Form({
  onSubmit,
  loading,
  mode = "add",
  register,
  handleSubmit,
  userData,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* First Name */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          {...register("firstName", { required: "First name is required" })}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          {...register("lastName", { required: "Last name is required" })}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Age */}
      <div>
        <label className="block text-xs font-medium text-gray-700">Age</label>
        <input
          type="number"
          {...register("age", { required: "Age is required" })}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Gender
        </label>
        <select
          {...register("gender", { required: "Gender is required" })}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-[#134B70] text-white py-2 px-4 rounded hover:bg-[#508C9B] focus:outline-none w-full text-sm"
          disabled={loading}
        >
          {loading
            ? mode === "edit"
              ? "Updating..."
              : "Adding..."
            : mode === "edit"
            ? "Update User"
            : "Add User"}
        </button>
      </div>
    </form>
  );
}
