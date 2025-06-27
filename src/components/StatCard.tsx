import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  change?: string; // e.g., "+20.1%" or "-2.1%"
  description?: string; // e.g., "from last month"
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, change, description }) => {
  console.log('StatCard loaded for:', title);

  const isPositive = change?.startsWith('+');
  const isNegative = change?.startsWith('-');

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="text-xs text-muted-foreground flex items-center">
            <span
              className={cn(
                "flex items-center gap-1",
                isPositive && "text-green-500",
                isNegative && "text-red-500"
              )}
            >
              {isPositive && <ArrowUp className="h-4 w-4" />}
              {isNegative && <ArrowDown className="h-4 w-4" />}
              {change}
            </span>
            {description && <span className="ml-1">{description}</span>}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;