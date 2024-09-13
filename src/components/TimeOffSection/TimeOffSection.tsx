import React from "react";

const TimeOffSection = () => {
	const timeOffData = [
		{ type: "Sick", daysAvailable: 3, scheduledText: "1 day scheduled" },
		{ type: "Annual Leave", daysAvailable: 10.3, scheduledText: "" },
		{
			type: "Comp/In Lieu Time",
			daysAvailable: 0,
			scheduledText: "Human Used(YTD)",
		},
	];

	return (
		<section>
			<h2 className="text-xl font-semibold mb-4">Time Off</h2>
			<div className="flex flex-row gap-4 ">
				{timeOffData.map((policy, index) => (
					<div
						className="w-full md:w-1/3 p-4 bg-[#f0f3f8] rounded-lg shadow-sm flex flex-col items-center"
						key={index}
					>
						<div className="text-center text-xl font-semibold">
							{policy.type}
						</div>
						<div className="text-3xl font-semibold">
							{policy.daysAvailable}
						</div>
						<div className="text-center text-sm">
							{policy.scheduledText}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TimeOffSection;
