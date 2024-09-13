import React from "react";

interface Contact {
	type: string;
	value: string;
}

interface EmploymentDetails {
	position: string;
	department: string;
	location: string;
}

interface DirectReport {
	name: string;
}

interface UserProfileProps {
	user: {
		profilePicture: string;
		contacts: Contact[];
		hireDate: string;
		tenure: string;
		employmentDetails: EmploymentDetails;
		directReports: DirectReport[];
	};
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => (
	<section className="flex flex-col gap-4 p-4  items-center">
		<img
			className="w-36 h-36 rounded-full"
			src={user.profilePicture}
			alt="User Profile"
		/>
		<div className="p-4 bg-white rounded-2xl w-full">
			{user.contacts.map((contact, index) => (
				<div className="flex items-center gap-2" key={index}>
					{/* Add an icon for contact type here */}
					<span className="text-sm font-medium">{contact.value}</span>
				</div>
			))}
		</div>
		<div className="p-4 bg-white rounded-2xl w-full">
			<div className="text-sm font-medium">Hire Date</div>
			<div className="text-sm font-medium">{user.hireDate}</div>
			<div className="text-sm font-medium">{user.tenure}</div>
		</div>
		<div className="p-4 bg-white rounded-2xl w-full">
			<div className="flex gap-2">
				<span className="text-sm font-medium">
					{user.employmentDetails.position}
				</span>
			</div>
		</div>
		<div className="p-4 bg-white rounded-2xl w-full">
			<div className="text-sm font-medium">Direct Reports</div>
			{user.directReports.map((report, index) => (
				<div className="flex items-center gap-2" key={index}>
					<span className="text-sm font-medium">{report.name}</span>
				</div>
			))}
		</div>
	</section>
);

export default UserProfile;
