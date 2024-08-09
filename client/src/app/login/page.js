"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      console.log("masuk login", data);

      const responLogin = await axios.post(
        "https://dummyjson.com/auth/login",
        data
      );

      if (responLogin.status === 200) {
        localStorage.setItem("authToken", responLogin.data.token);
        router.push("/dashboard");
        toast.success("Login successful!");
      }

      console.log(responLogin, ">> login");
      console.log(responLogin.data.token, ">> token login");
    } catch (error) {
      console.log(error, "<< error login");
      // alert("Login failed!");
      toast.error("Login failed!");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-gradient-to-r from-[#5B99C2] to-[#1A4870] rounded-[20px] p-4">
        <div className="border-[10px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="flex flex-col justify-center items-center my-3">
            <img
              className="w-48 h-16 object-cover"
              src="/logo.png"
              alt="Logo iProc"
            />
            <h1 className="pt-4 font-bold dark:text-gray-400 text-3xl text-center cursor-default">
              Masuk ke Platfrom iProc
            </h1>
            <p className="text-sm">
              sistem modernisasi pengadaan barang dan jasa eletronik
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <label
                htmlFor="username"
                className="mb-1 dark:text-gray-400 text-sm block"
              >
                Username
              </label>
              <input
                id="username"
                {...register("username", { required: true })}
                className="border p-2 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-sm focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="text"
                placeholder="Username"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1 dark:text-gray-400 text-sm block"
              >
                Password
              </label>
              <input
                id="password"
                {...register("password", { required: true })}
                className="border p-2 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-sm focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                className="bg-gradient-to-r dark:text-gray-300 from-[#5B99C2] to-[#1A4870] shadow-lg p-2 text-white rounded-lg w-full hover:scale-105 hover:from-[#1A4870] hover:to-[#5B99C2] transition duration-300 ease-in-out"
                type="submit"
              >
                LOG IN
              </button>
            </div>
          </form>
          <div className="text-gray-500 flex text-center flex-col mt-3 items-center text-xs">
            <p className="cursor-default">
              Informasi iProc
              <a
                className="group text-blue-400 transition-all duration-100 ease-in-out ml-1"
                href="mailto:tanyaardhiap@gmail.com"
              >
                <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  helpdesk@adw.co.id
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
