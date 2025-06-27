import React, { useState, useMemo } from 'react';
import { DateRange } from 'react-day-picker';

// Custom Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import DateRangePicker from '@/components/DateRangePicker';

// shadcn/ui Components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

// Icons
import { Search } from 'lucide-react';

// Placeholder product data
const products = [
  {
    id: 'prod-001',
    name: 'Classic Leather Watch',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop',
    status: 'In Stock',
    price: 150.00,
    sales: 120,
    revenue: 18000.00,
    stock: 250,
  },
  {
    id: 'prod-002',
    name: 'Wireless Bluetooth Headphones',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop',
    status: 'In Stock',
    price: 99.99,
    sales: 350,
    revenue: 34996.50,
    stock: 400,
  },
  {
    id: 'prod-003',
    name: 'Modern Smart Speaker',
    imageUrl: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9ce?q=80&w=400&auto=format&fit=crop',
    status: 'Low Stock',
    price: 79.50,
    sales: 85,
    revenue: 6757.50,
    stock: 20,
  },
  {
    id: 'prod-004',
    name: 'Ergonomic Office Chair',
    imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff53822ef?q=80&w=400&auto=format&fit=crop',
    status: 'Out of Stock',
    price: 275.00,
    sales: 45,
    revenue: 12375.00,
    stock: 0,
  },
  {
    id: 'prod-005',
    name: 'Aesthetic Succulent Plant',
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&auto=format&fit=crop',
    status: 'In Stock',
    price: 25.00,
    sales: 500,
    revenue: 12500.00,
    stock: 1000,
  },
];

type Product = typeof products[0];

const ProductPerformance = () => {
  console.log('ProductPerformance page loaded');
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [searchTerm, setSearchTerm] = useState('');

  const handleDateChange = (range: DateRange | undefined) => {
    setDateRange(range);
    console.log('Selected date range:', range);
  };
  
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const getStatusBadgeVariant = (status: Product['status']): 'default' | 'secondary' | 'destructive' => {
    if (status === 'In Stock') return 'default';
    if (status === 'Low Stock') return 'secondary';
    return 'destructive';
  };

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 flex-1">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products by name..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <DateRangePicker onDateChange={handleDateChange} />
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                An overview of your product performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Units Sold</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                    <TableHead className="text-right">Stock Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="hidden sm:table-cell">
                        <Avatar className="h-12 w-12 rounded-md">
                          <AvatarImage src={product.imageUrl} alt={product.name} />
                          <AvatarFallback>{product.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(product.status)}>{product.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right">{product.sales.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${product.revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                      <TableCell className="text-right">{product.stock.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ProductPerformance;