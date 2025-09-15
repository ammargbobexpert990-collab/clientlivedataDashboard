export default function Sidebar() {
  return (
    <div className="w-64 glass-card border-r border-border p-6 hidden lg:block relative backdrop-blur-xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          CyberAnalytics
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Business Intelligence</p>
      </div>
      
      <nav className="space-y-2">
        <a 
          href="#" 
          className="flex items-center px-3 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 glow-effect"
          data-testid="link-dashboard"
        >
          <span className="w-5 h-5 mr-3">📊</span>
          Dashboard
        </a>
        <a 
          href="#" 
          className="flex items-center px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          data-testid="link-clients"
        >
          <span className="w-5 h-5 mr-3">👥</span>
          Clients
        </a>
        <a 
          href="#" 
          className="flex items-center px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          data-testid="link-analytics"
        >
          <span className="w-5 h-5 mr-3">📈</span>
          Analytics
        </a>
        <a 
          href="#" 
          className="flex items-center px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          data-testid="link-settings"
        >
          <span className="w-5 h-5 mr-3">⚙️</span>
          Settings
        </a>
      </nav>

      <div className="mt-auto pt-8">
        <div className="glass-card p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <div>
              <p className="text-sm font-medium" data-testid="text-username">Admin User</p>
              <p className="text-xs text-muted-foreground" data-testid="text-email">admin@company.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
