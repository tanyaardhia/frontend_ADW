import React from "react";
import { useRouter } from "next/navigation";

const TableUserList = ({
  data,
  sortColumn,
  sortDirection,
  handleSort,
  getSortIcon,
}) => {
  const router = useRouter();

  const handleViewClick = (userId) => {
    router.push(`/users/${userId}`);
  };

  return (
    <div className="overflow-x-auto">
    <table
      id="sorting-table"
      className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead className="text-xs text-black uppercase bg-[#a6bacd]">
        <tr>
          <th
            className="px-6 py-3 cursor-pointer text-center"
            onClick={() => handleSort("username")}
          >
            <span className="flex items-center justify-center">
              Username
              {getSortIcon("username")}
            </span>
          </th>
          <th
            className="px-6 py-3 cursor-pointer text-center"
            onClick={() => handleSort("email")}
          >
            <span className="flex items-center justify-center">
              Email
              {getSortIcon("email")}
            </span>
          </th>
          <th
            className="px-6 py-3 cursor-pointer text-center"
            onClick={() => handleSort("age")}
          >
            <span className="flex items-center justify-center">
              Age
              {getSortIcon("age")}
            </span>
          </th>
          <th
            className="px-6 py-3 cursor-pointer text-center"
            onClick={() => handleSort("name")}
          >
            <span className="flex items-center justify-center">
              Name
              {getSortIcon("name")}
            </span>
          </th>
          <th className="px-6 py-3 text-center">
            <span className="flex items-center justify-center">
              Action
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.users.map((user) => (
          <tr
            key={user.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {user.username}
            </td>
            <td className="px-6 py-4 text-center">{user.email}</td>
            <td className="px-6 py-4 text-center">{user.age}</td>
            <td className="px-6 py-4 text-center">
              {user.firstName} {user.lastName}
            </td>
            <td className="px-6 py-4 text-center">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleViewClick(user.id)}
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default TableUserList;
