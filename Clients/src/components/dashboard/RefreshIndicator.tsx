interface RefreshIndicatorProps {
  isVisible: boolean;
}

export default function RefreshIndicator({ isVisible }: RefreshIndicatorProps) {
  return (
    <div className="data-refresh-indicator">
      <div className={`glass-card px-4 py-2 rounded-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          <span className="text-sm text-foreground" data-testid="text-sync-status">Syncing data...</span>
        </div>
      </div>
    </div>
  );
}
