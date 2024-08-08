import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ onSubmit, loading }) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4"
    >
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
        <label className="block text-xs font-medium text-gray-700">
          Age
        </label>
        <input
          type="number"
          {...register("age")}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Gender
        </label>
        <select
          {...register("gender")}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Phone
        </label>
        <input
          type="text"
          {...register("phone")}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Username */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          {...register("username", { required: "Username is required" })}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Birth Date */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Birth Date
        </label>
        <input
          type="date"
          {...register("birthDate")}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          {...register("image")}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Blood Group */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Blood Group
        </label>
        <input
          type="text"
          {...register("bloodGroup")}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Height */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Height (cm)
        </label>
        <input
          type="number"
          step="0.01"
          {...register("height")}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Weight */}
      <div>
        <label className="block text-xs font-medium text-gray-700">
          Weight (kg)
        </label>
        <input
          type="number"
          step="0.01"
          {...register("weight")}
          className="border border-gray-300 rounded py-2 px-3 w-full text-sm"
        />
      </div>

      {/* Submit Button */}
      <div className="lg:col-span-2">
        <button
          type="submit"
          className="bg-[#134B70] text-white py-2 px-4 rounded hover:bg-[#508C9B] focus:outline-none w-full text-sm"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add User"}
        </button>
      </div>
    </form>
  );
}
