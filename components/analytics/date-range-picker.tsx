"use client"

import type * as React from "react"
import { CalendarIcon } from "lucide-react"
import { addDays, format } from "date-fns"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DateRangePickerProps {
  dateRange: DateRange
  setDateRange: React.Dispatch<React.SetStateAction<DateRange>>
  className?: string
}

export function DateRangePicker({ dateRange, setDateRange, className }: DateRangePickerProps) {
  const handlePresetChange = (preset: string) => {
    const today = new Date()

    switch (preset) {
      case "last-7-days":
        setDateRange({
          from: addDays(today, -7),
          to: today,
        })
        break
      case "last-30-days":
        setDateRange({
          from: addDays(today, -30),
          to: today,
        })
        break
      case "last-90-days":
        setDateRange({
          from: addDays(today, -90),
          to: today,
        })
        break
      case "last-year":
        setDateRange({
          from: addDays(today, -365),
          to: today,
        })
        break
    }
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn("w-full justify-start text-left font-normal", !dateRange && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3 border-b">
            <Select onValueChange={handlePresetChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select preset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-7-days">Last 7 days</SelectItem>
                <SelectItem value="last-30-days">Last 30 days</SelectItem>
                <SelectItem value="last-90-days">Last 90 days</SelectItem>
                <SelectItem value="last-year">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
