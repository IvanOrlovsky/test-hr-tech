"use client";

import { IoIosSearch } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

import { useState } from "react";
import { cn } from "@/lib/cn";

const NavigationBar = () => {
	const [activeLink, setActiveLink] = useState("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return (
		<nav className="bg-white px-8 flex flex-row items-center justify-between relative">
			<div className="flex flex-row gap-8 items-center">
				<div className="text-xl font-semibold my-4">HarmonyHR</div>
				<div className="md:hidden flex items-center">
					<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? (
							<AiOutlineClose size={24} />
						) : (
							<AiOutlineMenu size={24} />
						)}
					</button>
				</div>
				<div className="hidden md:flex md:flex-row gap-4 mt-4">
					<a
						href="#"
						onClick={() => setActiveLink("Home")}
						className={cn(
							"hover:bg-[#DAE6F2] hover:rounded-t-md p-3 font-semibold",
							{
								"bg-[#DAE6F2] rounded-t-md":
									activeLink === "Home",
							}
						)}
					>
						Home
					</a>
					<a
						href="#"
						onClick={() => setActiveLink("My Info")}
						className={cn(
							"hover:bg-[#DAE6F2] hover:rounded-t-md p-3 font-semibold",
							{
								"bg-[#DAE6F2] rounded-t-md":
									activeLink === "My Info",
							}
						)}
					>
						My Info
					</a>
					<a
						href="#"
						onClick={() => setActiveLink("People")}
						className={cn(
							"hover:bg-[#DAE6F2] hover:rounded-t-md p-3 font-semibold",
							{
								"bg-[#DAE6F2] rounded-t-md":
									activeLink === "People",
							}
						)}
					>
						People
					</a>
					<a
						href="#"
						onClick={() => setActiveLink("Hiring")}
						className={cn(
							"hover:bg-[#DAE6F2] hover:rounded-t-md p-3 font-semibold",
							{
								"bg-[#DAE6F2] rounded-t-md":
									activeLink === "Hiring",
							}
						)}
					>
						Hiring
					</a>
					<a
						href="#"
						onClick={() => setActiveLink("Reports")}
						className={cn(
							"hover:bg-[#DAE6F2] hover:rounded-t-md p-3 font-semibold",
							{
								"bg-[#DAE6F2] rounded-t-md":
									activeLink === "Reports",
							}
						)}
					>
						Reports
					</a>
					<a
						href="#"
						onClick={() => setActiveLink("Files")}
						className={cn(
							"hover:bg-[#DAE6F2] hover:rounded-t-md p-3 font-semibold",
							{
								"bg-[#DAE6F2] rounded-t-md":
									activeLink === "Files",
							}
						)}
					>
						Files
					</a>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<div className="md:hidden flex items-center">
					<button onClick={() => setIsSearchOpen(!isSearchOpen)}>
						<IoIosSearch size={24} />
					</button>
				</div>
				<div className="hidden md:flex border border-black px-4 py-2 rounded-xl flex-row gap-2">
					<IoIosSearch className="text-black self-center" />
					<input
						type="search"
						placeholder="Search"
						className="outline-none"
					/>
				</div>
				<div className="hidden md:flex items-center">
					<button>
						<IoSettingsOutline size={24} />
					</button>
				</div>
				<div className="hidden md:flex items-center">
					<button>
						<FaRegQuestionCircle size={24} />
					</button>
				</div>
				<div className="hidden md:flex items-center">
					<button>
						<IoMdNotificationsOutline size={24} />
					</button>
				</div>
				<img
					className="w-10 h-10 rounded-full"
					src="https://via.placeholder.com/38x38"
					alt="Profile"
				/>
			</div>

			{isMenuOpen && (
				<div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start z-10">
					<a
						href="#"
						onClick={() => setActiveLink("Home")}
						className={cn(
							"hover:bg-[#DAE6F2] p-3 w-full text-left font-semibold",
							{ "bg-[#DAE6F2]": activeLink === "Home" }
						)}
					>
						Home
					</a>
					<a
						href="#"
						onClick={() => setActiveLink("My Info")}
						className={cn(
							"hover:bg-[#DAE6F2] p-3 w-full text-left font-semibold",
							{ "bg-[#DAE6F2]": activeLink === "My Info" }
						)}
					>
						My Info
					</a>
					<a
						href="#"
						onClick={() => setActiveLink("People")}
						className={cn(
							"hover:bg-[#DAE6F2] p-3 w-full text-left font-semibold",
							{ "bg-[#DAE6F2]": activeLink === "People" }
						)}
					>
						People
					</a>
					<a
						href="#"
						onClick={() => setActiveLink("Hiring")}
						className={cn(
							"hover:bg-[#DAE6F2] p-3 w-full text-left font-semibold",
							{ "bg-[#DAE6F2]": activeLink === "Hiring" }
						)}
					>
						Hiring
					</a>
					<a
						href="#"
						onClick={() => setActiveLink("Reports")}
						className={cn(
							"hover:bg-[#DAE6F2] p-3 w-full text-left font-semibold",
							{ "bg-[#DAE6F2]": activeLink === "Reports" }
						)}
					>
						Reports
					</a>
					<a
						href="#"
						onClick={() => setActiveLink("Files")}
						className={cn(
							"hover:bg-[#DAE6F2] p-3 w-full text-left font-semibold",
							{ "bg-[#DAE6F2]": activeLink === "Files" }
						)}
					>
						Files
					</a>
				</div>
			)}

			{isSearchOpen && (
				<div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start p-4 z-10">
					<div className="border border-black p-2 rounded-xl w-full flex flex-row gap-2">
						<IoIosSearch className="text-black self-center" />
						<input
							type="search"
							placeholder="Search"
							className="outline-none w-full"
						/>
					</div>
				</div>
			)}
		</nav>
	);
};

export default NavigationBar;
