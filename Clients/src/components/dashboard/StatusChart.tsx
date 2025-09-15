import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface StatusChartProps {
  statusCounts?: Record<string, number>;
}

export default function StatusChart({ statusCounts }: StatusChartProps) {
  const data = statusCounts 
    ? Object.entries(statusCounts).map(([status, count]) => ({
        name: status.charAt(0).toUpperCase() + status.slice(1),
        value: count
      }))
    : [];

  const COLORS = ['hsl(142 84% 44%)', 'hsl(42 92% 56%)', 'hsl(195 100% 50%)', 'hsl(263 85% 65%)', 'hsl(0 84% 60%)'];

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">Client Status Distribution</h3>
        <div className="text-sm text-muted-foreground">Real-time</div>
      </div>
      <div className="chart-container h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              wrapperStyle={{
                paddingTop: '20px',
                fontSize: '12px',
                color: '#9CA3AF'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
