// "use client";
// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Form from "@/components/form";

// export default function Edit({ userId }) {
//   const { register, handleSubmit, setValue, reset } = useForm();
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   // Fetch user data when the component mounts
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`https://dummyjson.com/users/${userId}`);
//         if (response.status === 200) {
//           const user = response.data;
//           // Set form values with fetched user data
//           setValue("firstName", user.firstName);
//           setValue("lastName", user.lastName);
//           setValue("email", user.email);
//           setValue("username", user.username);
//           // Add other fields as needed
//         }
//       } catch (error) {
//         console.error("Error fetching user:", error);
//         toast.error("Failed to fetch user data.");
//       }
//     };

//     fetchUser();
//   }, [userId, setValue]);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     console.log("Updated data >> ", data);

//     try {
//       const response = await axios.put(
//         `https://dummyjson.com/users/${userId}`,
//         data
//       );
//       console.log("form api>>", response);

//       if (response.status === 200) {
//         toast.success("User updated successfully!");
//         router.push("/dashboard");
//         reset();
//       }
//     } catch (error) {
//       console.error("Error updating user:", error);
//       toast.error("Failed to update user. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
//       <h2 className="text-2xl font-bold mb-4 text-center">Edit User</h2>
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
//         <Form onSubmit={handleSubmit(onSubmit)} loading={loading} />
//       </div>
//     </div>
//   );
// }
