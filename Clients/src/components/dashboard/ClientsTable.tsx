interface Client {
  clients?: string;
  "no of headshots"?: string;
  price?: string;
  status?: string;
  email?: string;
}

interface ClientsTableProps {
  clients: Client[];
}

export default function ClientsTable({ clients }: ClientsTableProps) {
  const getStatusClass = (status?: string) => {
    const statusLower = (status || '').toLowerCase();
    if (statusLower.includes('active') || statusLower.includes('progress')) return 'status-active';
    if (statusLower.includes('pending') || statusLower.includes('waiting')) return 'status-pending';
    if (statusLower.includes('completed') || statusLower.includes('done')) return 'status-completed';
    return 'status-pending';
  };

  const recentClients = clients.slice(0, 5);

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">Recent Clients</h3>
        <button className="text-primary hover:text-primary/80 text-sm font-medium" data-testid="button-view-all">
          View All →
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-muted-foreground text-sm font-medium">Client</th>
              <th className="text-left py-3 px-4 text-muted-foreground text-sm font-medium">Headshots</th>
              <th className="text-left py-3 px-4 text-muted-foreground text-sm font-medium">Price</th>
              <th className="text-left py-3 px-4 text-muted-foreground text-sm font-medium">Status</th>
              <th className="text-left py-3 px-4 text-muted-foreground text-sm font-medium">Email</th>
            </tr>
          </thead>
          <tbody>
            {recentClients.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-muted-foreground">
                  No client data available. Please check your Google Sheets connection.
                </td>
              </tr>
            ) : (
              recentClients.map((client, index) => {
                const price = parseFloat((client.price || '0').toString().replace(/[$,]/g, '')) || 0;
                const statusClass = getStatusClass(client.status);
                
                return (
                  <tr key={index} className="border-b border-border hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer" data-testid={`row-client-${index}`}>
                    <td className="py-3 px-4">
                      <div className="font-medium text-foreground" data-testid={`text-client-name-${index}`}>
                        {client.clients || 'Unknown'}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-foreground" data-testid={`text-headshots-${index}`}>
                        {client['no of headshots'] || '0'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-foreground font-medium" data-testid={`text-price-${index}`}>
                        ${price.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center">
                        <span className={`status-indicator ${statusClass}`}></span>
                        <span className="text-foreground text-sm" data-testid={`text-status-${index}`}>
                          {(client.status || 'unknown').charAt(0).toUpperCase() + (client.status || 'unknown').slice(1)}
                        </span>
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-muted-foreground text-sm" data-testid={`text-email-${index}`}>
                        {client.email || 'N/A'}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
