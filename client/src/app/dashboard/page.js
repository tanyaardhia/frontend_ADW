"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import TableUserList from "@/components/tableUserList";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sorting, setSorting] = useState({
    key: "",
    direction: "asc",
  });

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const responseUsers = await axios.get("https://dummyjson.com/users");
      setUsers(responseUsers.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (term) => {
    setLoading(true);
    try {
      const responseSearch = await axios.get(
        `https://dummyjson.com/users/search?q=${term}`
      );
      setUsers(responseSearch.data.users);
    } catch (error) {
      console.error("Error searching data:", error);
    } finally {
      setLoading(false);
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

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mb-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Users List</h2>
          <div className="relative">
            <input
              type="text"
              className="border border-stone-400 rounded py-2 px-4 placeholder:text-sm focus:scale-105 ease-in-out duration-300 pr-10"
              placeholder="searching users"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-spinner text-neutral"></span>
          </div>
        ) : (
          <TableUserList
            users={users}
            handleSort={handleSort}
            sorting={sorting}
            router={router}
          />
        )}
      </div>
    </div>
  );
}
