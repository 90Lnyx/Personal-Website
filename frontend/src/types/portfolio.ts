export type PortfolioMode = 'hr' | 'dev';

export type ArchiveView = 'opening' | 'hero' | 'intro' | 'artifact' | 'journey' | 'contact';

export interface WaypointChapter {
	id: ArchiveView;
	roman: string;
	char: string;
	title: string;
	subtitle: string;
}

export interface NavigationState {
	mode: PortfolioMode;
	currentView: ArchiveView;
	navUnlocked: boolean;
	unlockedViews: Set<ArchiveView>;
}
