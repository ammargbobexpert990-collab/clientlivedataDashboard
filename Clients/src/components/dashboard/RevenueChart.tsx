import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function RevenueChart() {
  // Generate sample revenue trend data
  const data = [
    { name: 'Jan', revenue: 32000 },
    { name: 'Feb', revenue: 38000 },
    { name: 'Mar', revenue: 45000 },
    { name: 'Apr', revenue: 42000 },
    { name: 'May', revenue: 51000 },
    { name: 'Jun', revenue: 48000 },
  ];

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">Revenue Trends</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-md bg-primary/20 text-primary text-sm" data-testid="button-30d">30D</button>
          <button className="px-3 py-1 rounded-md text-muted-foreground text-sm hover:text-foreground" data-testid="button-90d">90D</button>
          <button className="px-3 py-1 rounded-md text-muted-foreground text-sm hover:text-foreground" data-testid="button-1y">1Y</button>
        </div>
      </div>
      <div className="chart-container h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              tickFormatter={(value) => `$${(value / 1000)}K`}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(195 100% 50%)"
              strokeWidth={3}
              dot={{ fill: 'hsl(195 100% 50%)', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: 'hsl(195 100% 50%)', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
