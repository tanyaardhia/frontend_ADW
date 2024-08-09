"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Form from "@/components/form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";

export default function Edit() {
  const { id } = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();

  const fetchUser = async (id) => {
    console.log(id, ">>> edit");

    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    console.log(response, "dataa edit");
    return response.data;
  };

  const updateUser = async ({ id, data }) => {
    console.log(id, "id editt");
    console.log("sebelum update data>>> ", data);

    const response = await axios.put(`https://dummyjson.com/users/${id}`, data);
    console.log(response, "dataa edit 222");
    console.log("sesudah update >", response.data);

    return response.data;
  };

  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
    },
  });

  const { data, isLoading } = useQuery(
    ["user", id],
    () => fetchUser(id),
    {
      enabled: !!id,
      onError: () => toast.error("Failed to fetch user data."),
    }
  );

  const mutation = useMutation((data) => updateUser({ id, data }), {
    onSuccess: () => {
      toast.success("updated successfully!");
      queryClient.invalidateQueries(["user", id]);
      router.push(`/users/${id}`);
    },
    onError: () => {
      toast.error("Failed to update user. Please try again.");
    },
  });

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  const onSubmit = (data) => {
    console.log(data, "sesudah diedit onsubmit");
    mutation.mutate(data);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit User</h2>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Form
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          loading={mutation.isLoading}
          mode="edit"
          userData={data}
        />
      </div>
    </div>
  );
}
