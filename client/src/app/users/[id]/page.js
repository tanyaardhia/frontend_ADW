"use client";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import CardUserDetail from "@/components/cardUserDetail";

export default function UserDetails() {
  const { id } = useParams();
  console.log(id, 'UserDetails');
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(id, ">>> id dari useParams");

    if (id) {
      const fetchUser = async () => {
        try {
          const responseUserDetails = await axios.get(
            `https://dummyjson.com/users/${id}`
          );
          console.log(responseUserDetails, "<< userdetails");

          setUser(responseUserDetails.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      fetchUser();
    }
  }, [id]);

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );

  return (
    <div>
      <section className="w-full overflow-hidden dark:bg-gray-900">
        <div className="flex flex-col">
          {/* cover image */}
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Cover"
            className="w-full h-[40vh] object-cover"
          />

          {/* image */}
          <div className="flex justify-center -mt-16">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />
          </div>

          {/* user details */}
          <CardUserDetail id={id} user={user} />
        </div>
      </section>
    </div>
  );
}
