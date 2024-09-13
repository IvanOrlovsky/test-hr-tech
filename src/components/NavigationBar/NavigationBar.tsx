"use client";

import { IoIosSearch } from "react-icons/io";

import { useState } from "react";
import { cn } from "@/lib/cn";

const NavigationBar = () => {
	const [activeLink, setActiveLink] = useState("");
	return (
		<nav className="bg-white  px-8 flex flex-row items-center justify-between">
			<div className="flex flex-row gap-8">
				<div className="text-xl font-semibold self-center my-4">
					HarmonyHR
				</div>
				<div className="flex flex-row gap-4 mt-4 self-end">
					<a
						href="#"
						onClick={() => setActiveLink("Home")}
						className={cn(
							" hover:bg-[#DAE6F2] hover:rounded-t-md  p-3 font-semibold",
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
							" hover:bg-[#DAE6F2] hover:rounded-t-md p-3   font-semibold",
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
							" hover:bg-[#DAE6F2] hover:rounded-t-md p-3   font-semibold",
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
							" hover:bg-[#DAE6F2] hover:rounded-t-md p-3   font-semibold",
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
							" hover:bg-[#DAE6F2] hover:rounded-t-md  p-3  font-semibold",
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
							" hover:bg-[#DAE6F2] hover:rounded-t-md p-3 font-semibold",
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
			<div className="flex items-center gap-4 self-center">
				<div className="border border-black px-4 py-2 rounded-xl flex flex-row gap-2">
					<IoIosSearch className="text-black self-center" />

					<input
						type="search"
						placeholder="Search"
						className="outline-none"
					></input>
				</div>
				<img
					className="w-10 h-10 rounded-full"
					src="https://via.placeholder.com/38x38"
					alt="Profile"
				/>
			</div>
		</nav>
	);
};
export default NavigationBar;
