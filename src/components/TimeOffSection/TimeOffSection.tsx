import React from "react";

import { CiMedicalCross } from "react-icons/ci";
import { PiMountains } from "react-icons/pi";
import { GrDocumentTime } from "react-icons/gr";

const TimeOffSection = () => {
	const timeOffData = [
		{
			type: "Sick",
			icon: <CiMedicalCross className="self-center" />,
			daysAvailable: 3,
			unitOfMeasurement: "Days Available",
			scheduledText: "1 day scheduled",
			underText: "Sick Full-Time",
		},
		{
			type: "Annual Leave",
			icon: <PiMountains className="self-center" />,
			daysAvailable: 10.3,
			unitOfMeasurement: "Days Available",
			scheduledText: "",
			underText: "Holiday Full-Time",
		},
		{
			type: "Comp/In Lieu Time",
			icon: <GrDocumentTime className="self-center" />,
			daysAvailable: 0,
			unitOfMeasurement: "Human Used(YTD)",
			scheduledText: "",
			underText: "Comp/in Lieu Time Flexible Policy",
		},
	];

	return (
		<section>
			<div className="flex flex-row gap-2 pb-2 mb-4 border-b-2 border-black">
				<GrDocumentTime className="self-center" />
				<h2 className="text-xl font-semibold">Time Off</h2>
			</div>
			<div className="flex flex-row gap-8 justify-around overflow-x-auto">
				{timeOffData.map((policy, index) => (
					<div
						className="w-[260px] min-w-[260px] py-3 bg-[#F0F3F8] rounded-lg shadow-sm flex flex-col gap-1 items-center"
						key={index}
					>
						<div className="text-center text-2xl font-semibold">
							{policy.type}
						</div>
						<div className="flex flex-row items-center gap-2 text-3xl font-semibold">
							{policy.icon}
							{policy.daysAvailable}
						</div>
						<div className="text-center text-base font-semibold">
							{policy.unitOfMeasurement}
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
