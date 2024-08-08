"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  const [open, setOpen] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <div>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white">
        <Card className="h-full w-full p-4 shadow-xl shadow-blue-gray-900/5 border-none">
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              iProc
            </Typography>
          </div>
          <List>
            <Accordion>
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              <button onClick={handleLogout} className="w-full text-left">
                Log Out
              </button>
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
}
