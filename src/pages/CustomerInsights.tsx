import React, { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { Users, DollarSign, Activity } from 'lucide-react';

// Custom Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import DateRangePicker from '@/components/DateRangePicker';

// shadcn/ui Components
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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Placeholder data
const customerGrowthData = [
  { month: 'Jan', newCustomers: 150 },
  { month: 'Feb', newCustomers: 200 },
  { month: 'Mar', newCustomers: 180 },
  { month: 'Apr', newCustomers: 250 },
  { month: 'May', newCustomers: 300 },
  { month: 'Jun', newCustomers: 280 },
];

const recentSignups = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', signupDate: '2023-10-25', status: 'New' },
  { id: '2', name: 'Bob Williams', email: 'bob@example.com', signupDate: '2023-10-24', status: 'Returning' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', signupDate: '2023-10-24', status: 'New' },
  { id: '4', name: 'Diana Miller', email: 'diana@example.com', signupDate: '2023-10-22', status: 'New' },
  { id: '5', name: 'Ethan Davis', email: 'ethan@example.com', signupDate: '2023-10-21', status: 'Returning' },
];

const CustomerInsights = () => {
  console.log('CustomerInsights loaded');

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2023, 9, 1),
    to: new Date(),
  });

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Customer Insights</h2>
              <DateRangePicker onDateChange={setDateRange} initialDate={dateRange} />
          </div>

          {/* Metric Cards */}
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,403</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Customers (This Period)</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+345</div>
                <p className="text-xs text-muted-foreground">+180.1% from last period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average LTV</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$845.20</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
          </section>

          {/* Chart and Table Section */}
          <section className="grid gap-6 md:grid-cols-1 xl:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Growth</CardTitle>
                  <CardDescription>New customer sign-ups over the last 6 months.</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={customerGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="newCustomers" name="New Customers" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle>Recent Sign-ups</CardTitle>
                      <CardDescription>A list of the newest customers.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <Table>
                          <TableHeader>
                              <TableRow>
                                  <TableHead>Customer</TableHead>
                                  <TableHead>Status</TableHead>
                                  <TableHead className="text-right">Sign-up Date</TableHead>
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                              {recentSignups.map((customer) => (
                                  <TableRow key={customer.id}>
                                      <TableCell>
                                          <div className="font-medium">{customer.name}</div>
                                          <div className="text-sm text-muted-foreground">{customer.email}</div>
                                      </TableCell>
                                      <TableCell>
                                          <Badge variant={customer.status === 'New' ? 'default' : 'secondary'}>{customer.status}</Badge>
                                      </TableCell>
                                      <TableCell className="text-right">{customer.signupDate}</TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </CardContent>
              </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CustomerInsights;