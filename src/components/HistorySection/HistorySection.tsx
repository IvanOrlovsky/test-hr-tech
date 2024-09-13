import React, { useMemo } from "react";
import {
	Table,
	TableHeader,
	TableBody,
	TableCell,
	TableRow,
} from "../ui/table";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

import { HistoryEntry, HistorySectionProps } from "./types";
import { GrHistory } from "react-icons/gr";

const HistorySection: React.FC<HistorySectionProps> = ({ history }) => {
	const columns = useMemo(
		() => [
			{
				accessor: "date",
				header: "Date",
			},
			{
				accessor: "description",
				header: "Description",
			},
			{
				accessor: "usedDays",
				header: "Used Days",
			},
			{
				accessor: "earnedDays",
				header: "Earned Days",
			},
			{
				accessor: "balance",
				header: "Balance",
			},
		],
		[]
	);

	return (
		<section className="flex flex-col gap-4">
			<div className="flex flex-row gap-2 pb-2 mb-4 border-b-2 border-black ">
				<GrHistory className="self-center" />
				<h2 className="text-xl font-semibold">History</h2>
			</div>
			<div className="flex flex-col md:flex-row w-full gap-3">
				<div className="mt-4 md:mt-0 w-full md:w-auto">
					<Select>
						<SelectTrigger className="">
							<SelectValue placeholder="Sick" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1">1</SelectItem>
							<SelectItem value="2">2</SelectItem>
							<SelectItem value="3">3</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="flex flex-row grow justify-between ">
					<Select>
						<SelectTrigger className="w-fit">
							<SelectValue placeholder="All" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1">1</SelectItem>
							<SelectItem value="2">2</SelectItem>
							<SelectItem value="3">3</SelectItem>
						</SelectContent>
					</Select>

					<Select>
						<SelectTrigger className="w-fit">
							<SelectValue placeholder="Balance History" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1">1</SelectItem>
							<SelectItem value="2">2</SelectItem>
							<SelectItem value="3">3</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<Table className="">
				<TableHeader className="bg-[#DAE6F2]">
					<TableRow>
						{columns.map((column) => (
							<TableCell key={column.accessor}>
								{column.header}
							</TableCell>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{history.map((row, rowIndex) => (
						<TableRow
							key={rowIndex}
							className="hover:bg-[#DAE6F2] border-b-4 border-[#7C96B1]"
						>
							{columns.map((column) => (
								<TableCell key={column.accessor}>
									{row[column.accessor as keyof HistoryEntry]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	);
};

export default HistorySection;
