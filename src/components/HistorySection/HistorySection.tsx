import React from "react";
import { HistorySectionProps } from "./types";

const HistorySection: React.FC<HistorySectionProps> = ({ history }) => (
	<section>
		<h2 className="text-xl font-semibold mb-4">History</h2>
		<ul>
			{history.map((entry, index) => (
				<li className="flex justify-between py-2 border-b" key={index}>
					<span className="text-sm font-medium">{entry.date}</span>
					<span className="text-sm font-medium">
						{entry.description}
					</span>
				</li>
			))}
		</ul>
	</section>
);

export default HistorySection;
