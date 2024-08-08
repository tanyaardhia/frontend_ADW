import React from "react";

export default function TableUserList({ users, handleSort, sorting, router }) {
  const getSortIcon = (key) => {
    if (sorting.key === key) {
      if (sorting.direction === "asc") {
        return (
          <svg
            className="w-4 h-4 ms-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m8 15 4 4 4-4m0-6-4-4-4 4"
            />
          </svg>
        );
      } else {
        return (
          <svg
            className="w-4 h-4 ms-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m16 15-4 4-4-4m8-6-4-4-4 4"
            />
          </svg>
        );
      }
    } else {
      return (
        <svg
          className="w-4 h-4 ms-1 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m8 15 4 4 4-4m0-6-4-4-4 4"
          />
        </svg>
      );
    }
  };

  return (
    <div className="overflow-x-auto w-full max-w-4xl">
      <table className="min-w-full bg-white border border-gray-300 rounded-xl">
        <thead>
          <tr className="bg-[#a6bacd] text-black text-sm leading-normal">
            <th
              className="py-3 px-6 text-left cursor-pointer"
              onClick={() => handleSort("username")}
            >
              <span className="flex items-center">
                Username
                {getSortIcon("username")}
              </span>
            </th>
            <th
              className="py-3 px-6 text-left cursor-pointer"
              onClick={() => handleSort("password")}
            >
              <span className="flex items-center">
                Password
                {getSortIcon("password")}
              </span>
            </th>
            <th
              className="py-3 px-6 text-left cursor-pointer"
              onClick={() => handleSort("age")}
            >
              <span className="flex items-center">
                Usia
                {getSortIcon("age")}
              </span>
            </th>
            <th
              className="py-3 px-6 text-left cursor-pointer"
              onClick={() => handleSort("firstName")}
            >
              <span className="flex items-center">
                Name
                {getSortIcon("firstName")}
              </span>
            </th>
            <th className="py-3 px-6 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white py-3 px-6 text-left">
                {user.username}
              </td>
              <td className="py-3 px-6 text-left">{user.password}</td>
              <td className="py-3 px-6 text-left">{user.age}</td>
              <td className="py-3 px-6 text-left">
                {user.firstName} {user.lastName}
              </td>
              <td className="py-3 px-6 text-center">
                <button
                  className="bg-[#134B70] text-white py-2 px-4 rounded hover:bg-[#508C9B]"
                  onClick={() => router.push(`/users/${user.id}`)}
                >
                  See
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
