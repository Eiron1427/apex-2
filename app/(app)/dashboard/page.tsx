import { CardBody } from "@/components/ui";
import { Card } from "@/components/ui";
import { StatItem, OrderStatus, WeeklyDataPoint, OrderItem } from "@/types";
import { PageHeader } from "@/components/ui";
const STATS: StatItem[] = [
  {
    title: "Total Users",
    value: "2,847",
    trend: "+12.5%",
    positive: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: "Revenue",
    value: "$48,290",
    trend: "+8.2%",
    positive: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path d="M12 6v12m-3-2.818.879.659 1.171-1.224a1 1 0 1 1 1.59 1.193l-1.224 1.171M12 15.837l-.879-.659-1.171 1.224a1 1 0 1 1-1.59-1.193l1.224-1.171M12 18.884l.879.659 1.171-1.224a1 1 0 0 1 1.59 1.193l-1.224 1.171" />
      </svg>
    ),
  },
  {
    title: "Orders",
    value: "1,240",
    trend: "-3.1%",
    positive: false,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    title: "Tickets",
    value: "37",
    trend: "+14%",
    positive: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

const WEEKLY_DATA: WeeklyDataPoint[] = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 52 },
  { day: "Thu", value: 91 },
  { day: "Fri", value: 85 },
  { day: "Sat", value: 43 },
  { day: "Sun", value: 34 },
];

const RECENT_ORDERS: OrderItem[] = [
  {
    id: "ORD-7391",
    customer: "Alice Johnson",
    status: "completed",
    amount: "$1,240",
    date: "2025-09-12",
  },
  {
    id: "ORD-7390",
    customer: "Bob Smith",
    status: "processing",
    amount: "$890",
    date: "2025-09-12",
  },
  {
    id: "ORD-7389",
    customer: "Carol Williams",
    status: "completed",
    amount: "$2,100",
    date: "2025-09-11",
  },
  {
    id: "ORD-7388",
    customer: "David Brown",
    status: "shipped",
    amount: "$540",
    date: "2025-09-11",
  },
  {
    id: "ORD-7387",
    customer: "Eva Martinez",
    status: "pending",
    amount: "$1,780",
    date: "2025-09-10",
  },
];

const STATUS_CLASSES: Record<OrderStatus, string> = {
  completed: "badge-success",
  processing: "badge-warning",
  shipped: "badge-info",
  pending: "badge-ghost",
};

export default function DashboardPage() {
  return(
    <div className="space-y-8">
      <PageHeader title="Dashboard" description="Overview of System Information" />

      <div className="stats stats-vertical w-full shadow sm:grid-cols-2 sm:stats-horizontal lg:grid-cols-4">
        { STATS.map(item => (
          <div key={item.title} className="stat">
            <div className="stat-figure text-primary">{ item.icon }</div>
            <div className="stat-title">{ item.title }</div>
            <div className="stat-value">{ item.value }</div>
            <div className={item.positive ? 'text-success' : 'text-error'}>
              {item.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardBody>
            <h3 className="card-title">Weekly Activity</h3>
            <div className="flex flex-col gap-3 pt-2">
              { WEEKLY_DATA.map(data => (
                <div key={data.day} className="flex items-center text-xs">
                  <span className="text-base-content/60 w-8 text-xs">
                  {data.day}
                  </span>
                  <progress className="progress progress-primary flex-1" value={data.value} max={100}></progress>
                  <span className="text-right text-xs w-10">{data.value}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="overflow-x-auto">
          <CardBody>
            <h3 className="card-title">Recent Orders</h3>
            <table className="table-zebra table-sm mt-2">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                { RECENT_ORDERS.map(order => (
                  <tr key={order.id}>
                      <td className="font-mono text-xs">{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.amount}</td>
                      <td>
                          <span className={`badge badge-sm ${STATUS_CLASSES[order.status]}`}>{order.status}</span>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
