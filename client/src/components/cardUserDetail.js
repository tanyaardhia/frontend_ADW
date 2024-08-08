import React from "react";

export default function CardUserDetail({ user }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 md:text-lg sm:text-lg lg:text-xl">
          {user.firstName} {user.lastName}
        </h1>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 -mt-3.5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
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
