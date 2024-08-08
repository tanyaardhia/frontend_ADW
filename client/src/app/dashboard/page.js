"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sorting, setSorting] = useState({
    key: "username",
    direction: "asc",
  });

  const fetchData = async () => {
    try {
      const responseUsers = await axios.get("https://dummyjson.com/users");
      setUsers(responseUsers.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async (term) => {
    try {
      const responseSearch = await axios.get(
        `https://dummyjson.com/users/search?q=${term}`
      );
      setUsers(responseSearch.data.users);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      fetchData();
    }
  }, [searchTerm]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sorting.key === key && sorting.direction === "asc") {
      direction = "desc";
    }
    setSorting({ key, direction });
    setUsers((prevUsers) =>
      [...prevUsers].sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      })
    );
  };

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mb-6">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Users List</h2>
        <input
          type="text"
          className="border border-stone-400 rounded py-2 px-4 placeholder:text-sm focus:scale-105 ease-in-out duration-300"
          placeholder="searching users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl">
          <thead>
            <tr className="bg-[#a6bacd] text-black uppercase text-sm leading-normal">
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
                    onClick={() => console.log("see detail", user)}
                  >
                    See
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
