export interface HistoryEntry {
	date: string;
	description: string;
	usedDays: number;
	earnedDays: number;
	balance: number;
}

export interface HistorySectionProps {
	history: HistoryEntry[];
}
