import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Home,
  LineChart,
  Package,
  Users,
  Settings,
  BarChart3,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const navItems = [
  { to: '/', icon: Home, label: 'Dashboard' },
  { to: '/sales-analytics', icon: LineChart, label: 'Sales Analytics' },
  { to: '/product-performance', icon: Package, label: 'Product Performance' },
  { to: '/customer-insights', icon: Users, label: 'Customer Insights' },
];

const NavLinkItem: React.FC<{
  to: string;
  icon: React.ElementType;
  label: string;
}> = ({ to, icon: Icon, label }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <NavLink
        to={to}
        end={to === '/'}
        className={({ isActive }) =>
          cn(
            'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
            isActive && 'bg-accent text-accent-foreground'
          )
        }
      >
        <Icon className="h-5 w-5" />
        <span className="sr-only">{label}</span>
      </NavLink>
    </TooltipTrigger>
    <TooltipContent side="right">{label}</TooltipContent>
  </Tooltip>
);

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <BarChart3 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">CommercePulse</span>
        </Link>
        {navItems.map((item) => (
          <NavLinkItem key={item.to} {...item} />
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/settings"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default LeftSidebar;