import type { DashboardMetrics } from "@shared/schema";

interface KPICardsProps {
  metrics?: DashboardMetrics;
}

export default function KPICards({ metrics }: KPICardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Clients Card */}
      <div className="glass-card p-6 rounded-xl hover:glow-effect transition-all duration-300 hover:scale-105 pulse-ring">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium">Total Clients</p>
            <p className="text-3xl font-bold text-primary mt-2" data-testid="text-total-clients">
              {metrics?.totalClients?.toLocaleString() || '--'}
            </p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/50 rounded-xl flex items-center justify-center">
            <span className="text-2xl">👥</span>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-accent text-sm font-medium">↗ +12%</span>
          <span className="text-muted-foreground text-sm ml-2">vs last month</span>
        </div>
      </div>

      {/* Total Headshots Card */}
      <div className="glass-card p-6 rounded-xl hover:glow-effect transition-all duration-300 hover:scale-105">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium">Total Headshots</p>
            <p className="text-3xl font-bold text-secondary mt-2" data-testid="text-total-headshots">
              {metrics?.totalHeadshots?.toLocaleString() || '--'}
            </p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl flex items-center justify-center">
            <span className="text-2xl">📸</span>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-accent text-sm font-medium">↗ +8%</span>
          <span className="text-muted-foreground text-sm ml-2">vs last month</span>
        </div>
      </div>

      {/* Average Price Card */}
      <div className="glass-card p-6 rounded-xl hover:glow-effect transition-all duration-300 hover:scale-105">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium">Average Price</p>
            <p className="text-3xl font-bold text-accent mt-2" data-testid="text-avg-price">
              {metrics?.avgPrice ? `$${metrics.avgPrice.toFixed(0)}` : '--'}
            </p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/50 rounded-xl flex items-center justify-center">
            <span className="text-2xl">💰</span>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-accent text-sm font-medium">↗ +5%</span>
          <span className="text-muted-foreground text-sm ml-2">vs last month</span>
        </div>
      </div>

      {/* Revenue Card */}
      <div className="glass-card p-6 rounded-xl hover:glow-effect transition-all duration-300 hover:scale-105">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium">Total Revenue</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mt-2" data-testid="text-total-revenue">
              {metrics?.totalRevenue ? `$${metrics.totalRevenue.toLocaleString()}` : '--'}
            </p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl">💎</span>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-accent text-sm font-medium">↗ +18%</span>
          <span className="text-muted-foreground text-sm ml-2">vs last month</span>
        </div>
      </div>
    </div>
  );
}
