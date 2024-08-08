"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UsersAdd() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("sebelum dikirm >> ", data);

    try {
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        data
      );
      console.log("form api>>", response);

      if (response.status === 201) {
        const currentUsers = JSON.parse(localStorage.getItem("users")) || [];
        currentUsers.push(response.data);
        localStorage.setItem("users", JSON.stringify(currentUsers));
  
        toast.success("user added successfully!");
        router.push("/dashboard");
        reset();
      }
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New User</h2>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Form */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              {...register("age")}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              {...register("gender")}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              {...register("phone")}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Birth Date
            </label>
            <input
              type="date"
              {...register("birthDate")}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              {...register("image")}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Blood Group
            </label>
            <input
              type="text"
              {...register("bloodGroup")}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("height")}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Weight (kg)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("weight")}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-[#134B70] text-white py-2 px-4 rounded hover:bg-[#508C9B] focus:outline-none w-full"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add User"}
          </button>
        </form>
      </div>
    </div>
  );
}
