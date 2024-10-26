import { Button } from "@/components/ui/button";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "./mode-toggle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Home,
  Settings,
  User,
  Mail,
  Bell,
  Bookmark,
  Star,
  Github,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import axios from "axios";

export default function Navbar() {
  const getLogin = async () => {
    try {
      const response = await axios.get(
        "http://150.230.251.225/oauth2/authorization/github",
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (error) {}
  };

  const navigate = useNavigate();
  const [position, setPosition] = React.useState("bottom");
  return (
    <nav className="border-b">
      <div
        className="flex items-center p-4 mx-auto"
        style={{ maxWidth: "85rem" }}
      >
        <div className="flex-1">
          <Link to="/" className="text-3xl tracking-tighter text-bold">
            codingTestUs 🧑‍💻
          </Link>
        </div>
        <div className="justify-center flex-1 hidden space-x-8 md:flex">
          <Link to="/" className="font-medium text-md hover:underline">
            Features
          </Link>
          <Link
            to="/challenges"
            className="font-medium text-md hover:underline"
          >
            Problems
          </Link>
          <Link to="/" className="font-medium text-md hover:underline">
            Rank
          </Link>
          <Link to="/blogs" className="font-medium text-md hover:underline">
            About Us
          </Link>
        </div>
        <div className="flex items-center justify-end flex-1 space-x-4">
          <div className="hidden md:block">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[150px]"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sign In <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <div className="flex justify-between p-2">
                <DropdownMenuItem className="justify-center flex-1">
                  <a
                    href="http://150.230.251.225/oauth2/authorization/github"
                    className="flex"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Github
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="justify-center flex-1">
                  <a href="#" className="flex">
                    <span className="text-lg">G</span> &nbsp; Google
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <Button variant="outline" onClick={() => navigate('/login')}>Sign In</Button>
          <Button>Sign Up</Button> */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
