import { useRouter } from "next/navigation";
import React from "react";

export default function CardUserDetail({ id, user }) {
  const router = useRouter();
  console.log(id, "card detail ");

  const handleEdit = () => {
    router.push(`/users-update/${id}`);
  };

  const handleGoBack = () => {
    if (router) {
      router.back();
    } else {
      console.error("router is not defined");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <button
            onClick={handleGoBack}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white md:text-lg lg:text-xl">
            {user.firstName} {user.lastName}
          </h1>
        </div>

        <button className="ml-0 md:ml-4" onClick={handleEdit}>
          <p className="text-blue-500 hover:text-blue-700">Edit</p>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="w-full sm:w-1/2">
          <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div className="flex flex-col py-2">
              <dt className="text-gray-500 text-sm md:text-base lg:text-md dark:text-gray-400">
                First Name
              </dt>
              <dd className="text-sm md:text-base lg:text-md font-semibold">
                {user.firstName}
              </dd>
            </div>
            <div className="flex flex-col py-2">
              <dt className="text-gray-500 text-sm md:text-base lg:text-md dark:text-gray-400">
                Last Name
              </dt>
              <dd className="text-sm md:text-base lg:text-md font-semibold">
                {user.lastName}
              </dd>
            </div>
            <div className="flex flex-col py-2">
              <dt className="text-gray-500 text-sm md:text-base lg:text-md dark:text-gray-400">
                Date Of Birth
              </dt>
              <dd className="text-sm md:text-base lg:text-md font-semibold">
                {user.birthDate}
              </dd>
            </div>
            <div className="flex flex-col py-2">
              <dt className="text-gray-500 text-sm md:text-base lg:text-md dark:text-gray-400">
                Gender
              </dt>
              <dd className="text-sm md:text-base lg:text-md font-semibold">
                {user.gender}
              </dd>
            </div>
          </dl>
        </div>
        <div className="w-full sm:w-1/2">
          <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div className="flex flex-col py-2">
              <dt className="text-gray-500 text-sm md:text-base lg:text-md dark:text-gray-400">
                Phone Number
              </dt>
              <dd className="text-sm md:text-base lg:text-md font-semibold">
                {user.phone}
              </dd>
            </div>
            <div className="flex flex-col py-2">
              <dt className="text-gray-500 text-sm md:text-base lg:text-md dark:text-gray-400">
                Email
              </dt>
              <dd className="text-sm md:text-base lg:text-md font-semibold">
                {user.email}
              </dd>
            </div>
            <div className="flex flex-col py-2">
              <dt className="text-gray-500 text-sm md:text-base lg:text-md dark:text-gray-400">
                Blood Type
              </dt>
              <dd className="text-sm md:text-base lg:text-md font-semibold">
                {user.bloodGroup}
              </dd>
            </div>
            <div className="flex flex-col py-2">
              <dt className="text-gray-500 text-sm md:text-base lg:text-md dark:text-gray-400">
                Height
              </dt>
              <dd className="text-sm md:text-base lg:text-md font-semibold">
                {user.height} cm
              </dd>
            </div>
            <div className="flex flex-col py-2">
              <dt className="text-gray-500 text-sm md:text-base lg:text-md dark:text-gray-400">
                Weight
              </dt>
              <dd className="text-sm md:text-base lg:text-md font-semibold">
                {user.weight} kg
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}