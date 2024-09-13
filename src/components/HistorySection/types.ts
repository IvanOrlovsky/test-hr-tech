interface HistoryEntry {
	date: string;
	description: string;
}

export interface HistorySectionProps {
	history: HistoryEntry[];
}
