"use client";

import React, { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile/UserProfile";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import TimeOffSection from "../components/TimeOffSection/TimeOffSection";
import HistorySection from "../components/HistorySection/HistorySection";
import UpcomingTimeOff from "@/components/UpcomingTimeOff/UpcomingTimeOff";
import { useUserProfile } from "@/hooks/useUserProfile";

type UserProfile = {
	name: string;
	profilePicture: string;
	contacts: { type: string; value: string }[];
	hireDate: string;
	tenure: string;
	employmentDetails: {
		position: string;
		department: string;
		location: string;
	};
	directReports: { name: string }[];
};

const Home: React.FC = () => {
	const { data, loading, error } = useUserProfile();
	const [user, setUser] = useState<UserProfile>();

	const history = [
		{
			date: "23/05/2024",
			description: "Accrual for 23/05/2024 to 20/11/2024",
			usedDays: -6,
			earnedDays: 3.0,
			balance: 3.0,
		},
		{
			date: "23/05/2024",
			description: "Accrual for 23/05/2024 to 20/11/2024",
			usedDays: -6,
			earnedDays: 3.0,
			balance: 3.0,
		},
	];

	useEffect(() => {
		if (data && data.myProfile) {
			setUser({
				name: data.myProfile.name,
				profilePicture: data.myProfile.avatar,
				contacts: [{ type: "email", value: "user@example.com" }],
				hireDate: "Sep. 3,2020",
				tenure: "3y - 9m - 20d",
				employmentDetails: {
					position: "Full-Time",
					department: "Operations",
					location: "London, UK",
				},
				directReports: [],
			});
		}
	}, [data]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error fetching profile data</div>;

	return (
		<div className="bg-[#DAE6F2] min-h-screen">
			<NavigationBar />
			<main className="p-8">
				<div className="flex flex-col lg:flex-row gap-8">
					{user && <UserProfile user={user} />}
					<div className="flex flex-col gap-12 w-full">
						{user && <ProfileHeader title={user.name} />}
						<div className="flex flex-col gap-16 w-full bg-white p-8 ">
							<TimeOffSection />
							<UpcomingTimeOff />
							<HistorySection history={history} />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
