import React from "react";

import { CiMedicalCross } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { MdOutlineSavings } from "react-icons/md";

const UpcomingTimeOff = () => {
	const upcomingTimeOffData = [
		{
			date: "Jan 27",
			icon: <CiMedicalCross className="self-center" />,
			label: "1 dey of Sick",
		},
		{
			date: "Jul 4",
			icon: <MdOutlineSavings className="self-center" />,
			label: "Independence Day",
		},
	];

	return (
		<section>
			<div className="flex flex-row gap-2 pb-2 mb-4 border-b-2 border-black">
				<GoHistory className="self-center" />
				<h2 className="text-xl font-semibold">Time Off</h2>
			</div>
			<div className="flex flex-col gap-8 ">
				{upcomingTimeOffData.map((data, index) => (
					<div
						className="w-full border-b-2 border-black pb-3 flex flex-row gap-2 items-center "
						key={index}
					>
						<div className="flex flex-row items-center gap-2 text-3xl font-semibold ">
							{data.icon}
							<div className="flex flex-col gap-1">
								<div className="text-sm font-semibold">
									{data.date}
								</div>
								<div className="text-sm font-semibold">
									{data.label}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default UpcomingTimeOff;
