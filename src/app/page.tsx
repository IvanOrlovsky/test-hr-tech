import React from "react";
import UserProfile from "../components/UserProfile/UserProfile";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import TimeOffSection from "../components/TimeOffSection/TimeOffSection";
import HistorySection from "../components/HistorySection/HistorySection";
import UpcomingTimeOff from "@/components/UpcomingTimeOff/UpcomingTimeOff";

const user = {
	name: "Alexandra Kuibyshevskaya",
	profilePicture: "https://via.placeholder.com/150x150",
	contacts: [
		{ type: "phone", value: "07911 654321" },
		{ type: "email", value: "avd.yana@videorollnet" },
	],
	hireDate: "Sep. 3,2020",
	tenure: "3y - 9m - 20d",
	employmentDetails: {
		position: "Full-Time",
		department: "Operations",
		location: "London, UK",
	},
	directReports: [
		{ name: "Shane" },
		{ name: "Nathan" },
		{ name: "Mitchell" },
		{ name: "Philip" },
		{ name: "4 More..." },
	],
};

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
	// Add more history entries as needed
];

const Home: React.FC = () => (
	<div className="bg-[#DAE6F2] bg-white min-h-screen">
		<NavigationBar />
		<main className="p-8">
			<ProfileHeader title={user.name} />
			<div className="flex flex-col lg:flex-row gap-8">
				<UserProfile user={user} />
				<div className="flex flex-col gap-16 w-full">
					<TimeOffSection />
					<UpcomingTimeOff />
					<HistorySection history={history} />
				</div>
			</div>
		</main>
	</div>
);

export default Home;
