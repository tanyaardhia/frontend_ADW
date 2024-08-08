"use client";

import axios from "axios";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import TableUserList from "@/components/tableUserList";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState();
  const [sorting, setSorting] = useState({
    key: "",
    direction: "asc",
  });

  const fetchData = async (search, sortColumn, sorting) => {
    try {
      const response = await axios.get("https://dummyjson.com/users/search", {
        params: {
          q: search,
          sortBy: sortColumn,
          sortOrder: sorting,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const { data, error, isLoading, refetch } = useQuery(
    ["users", searchTerm, sortColumn, sorting],
    () => fetchData(searchTerm, sortColumn, sorting),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    refetch();
  }, [searchTerm, sortColumn, sorting, refetch]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSorting((prev) => (prev.direction === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSorting({ key: column, direction: "asc" });
    }
  };

  const getSortIcon = (key) => {
    if (sortColumn === key) {
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
              d="m16 15-4 4-4-4m0-6 4-4 4 4"
            />
          </svg>
        );
      }
    } else {
      return (
        <svg
          className="w-4 h-4 text-gray-600 ms-1"
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

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );

  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="relative p-4 m-9">
      <div className="flex flex-col md:flex-row items-center md:justify-between pb-4 bg-white dark:bg-gray-900">
        <h1 className="text-xl font-bold mb-4 md:mb-0">Users List</h1>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full md:w-auto">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
              onClick={() => setSearchTerm("")} 
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
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

      <TableUserList
        data={data}
        sortColumn={sortColumn}
        sorting={sorting.direction}
        handleSort={handleSort}
        getSortIcon={getSortIcon}
      />
    </div>
  );
}
