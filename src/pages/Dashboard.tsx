import React from 'react';
import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

import StatCard from '@/components/StatCard';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Placeholder data for the sales chart
const salesData = [
  { date: '2024-07-01', sales: 4000 },
  { date: '2024-07-04', sales: 3000 },
  { date: '2024-07-07', sales: 2000 },
  { date: '2024-07-10', sales: 2780 },
  { date: '2024-07-13', sales: 1890 },
  { date: '2024-07-16', sales: 2390 },
  { date: '2024-07-19', sales: 3490 },
  { date: '2024-07-22', sales: 3200 },
  { date: '2024-07-25', sales: 4100 },
  { date: '2024-07-28', sales: 3900 },
];

// Placeholder data for the recent orders table
const recentOrders = [
  { name: 'Liam Johnson', email: 'liam@example.com', amount: '$250.00', status: 'Delivered' },
  { name: 'Olivia Smith', email: 'olivia@example.com', amount: '$150.00', status: 'Processing' },
  { name: 'Noah Williams', email: 'noah@example.com', amount: '$350.00', status: 'Delivered' },
  { name: 'Emma Brown', email: 'emma@example.com', amount: '$450.00', status: 'Cancelled' },
  { name: 'Ava Jones', email: 'ava@example.com', amount: '$550.00', status: 'Delivered' },
];

const Dashboard = () => {
  console.log('Dashboard loaded');
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {/* Stat Cards Section */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <StatCard
              title="Total Revenue"
              value="$45,231.89"
              icon={DollarSign}
              change="+20.1%"
              description="from last month"
            />
            <StatCard
              title="Subscriptions"
              value="+2350"
              icon={Users}
              change="+180.1%"
              description="from last month"
            />
            <StatCard
              title="Weekly Sales"
              value="$1,329"
              icon={CreditCard}
              change="-12.1%"
              description="from last week"
            />
            <StatCard
              title="Active Now"
              value="+573"
              icon={Activity}
              change="+201"
              description="since last hour"
            />
          </div>

          {/* Chart and Table Section */}
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle>Sales This Month</CardTitle>
                <CardDescription>
                  A line chart showing revenue over the past 30 days.
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={salesData}
                    margin={{
                      top: 5,
                      right: 10,
                      left: -10,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  A list of the most recent orders from your store.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="font-medium">{order.name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {order.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              order.status === 'Delivered' ? 'default' : 
                              order.status === 'Processing' ? 'secondary' : 'destructive'
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{order.amount}</TableCell>
                      </TableRow>
                    )) synagogue
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;