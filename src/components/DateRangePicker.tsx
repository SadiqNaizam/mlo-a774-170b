"use client"

import * as React from "react"
import { addDays, format, subDays, startOfMonth, endOfMonth, startOfYear, endOfYear, subMonths } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  onDateChange: (range: DateRange | undefined) => void;
  initialDate?: DateRange;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  className,
  onDateChange,
  initialDate,
}) => {
  console.log('DateRangePicker loaded');
  const [date, setDate] = React.useState<DateRange | undefined>(initialDate);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    onDateChange(date);
  }, [date, onDateChange]);

  const setPresetDate = (range: DateRange) => {
    setDate(range);
    setIsOpen(false); 
  };
  
  const today = new Date();

  const presets = [
    { label: "Today", range: { from: today, to: today } },
    { label: "Last 7 Days", range: { from: subDays(today, 6), to: today } },
    { label: "Last 30 Days", range: { from: subDays(today, 29), to: today } },
    { label: "This Month", range: { from: startOfMonth(today), to: endOfMonth(today) } },
    { label: "Last Month", range: { from: startOfMonth(subMonths(today, 1)), to: endOfMonth(subMonths(today, 1)) } },
    { label: "This Year", range: { from: startOfYear(today), to: endOfYear(today) } },
  ];

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex" align="start">
          <div className="flex flex-col space-y-1 p-2 border-r">
            <span className="px-2 py-1.5 text-sm font-medium text-muted-foreground">Presets</span>
            {presets.map(preset => (
                <Button 
                    key={preset.label} 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => setPresetDate(preset.range)}
                >
                    {preset.label}
                </Button>
            ))}
          </div>
          <div className="flex flex-col">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
            <div className="p-3 border-t flex justify-end">
                <Button onClick={() => setIsOpen(false)}>Apply</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DateRangePicker;