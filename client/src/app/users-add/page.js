"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "@/components/form";

export default function UsersAdd() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("sebelum dikirim >> ", data);

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

        toast.success("User added successfully!");
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New User</h2>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <Form
          onSubmit={handleSubmit(onSubmit)} 
          loading={loading}
          register={register}
          mode="add"
        />
      </div>
    </div>
  );
}
