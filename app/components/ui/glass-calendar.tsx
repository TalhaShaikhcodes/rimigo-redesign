import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths, isSameDay, isToday, getDate, getDaysInMonth, startOfMonth } from "date-fns";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Day {
  date: Date;
  isToday: boolean;
  isSelected: boolean;
}

interface GlassCalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  className?: string;
}

const ScrollbarHide = () => (
  <style>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

export const GlassCalendar = React.forwardRef<HTMLDivElement, GlassCalendarProps>(
  ({ className, selectedDate: propSelectedDate, onDateSelect, ...props }, ref) => {
    const [currentMonth, setCurrentMonth] = React.useState(propSelectedDate || new Date());
    const [selectedDate, setSelectedDate] = React.useState(propSelectedDate || new Date());

    const { monthDays, startDay } = React.useMemo(() => {
      const start = startOfMonth(currentMonth);
      const totalDays = getDaysInMonth(currentMonth);
      const startDayOfWeek = start.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const days: Day[] = [];
      
      for (let i = 0; i < totalDays; i++) {
        const date = new Date(start.getFullYear(), start.getMonth(), i + 1);
        days.push({
          date,
          isToday: isToday(date),
          isSelected: isSameDay(date, selectedDate),
        });
      }
      return { monthDays: days, startDay: startDayOfWeek };
    }, [currentMonth, selectedDate]);

    const handleDateClick = (date: Date) => {
      setSelectedDate(date);
      onDateSelect?.(date);
    };

    const handlePrevMonth = () => {
      setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
      setCurrentMonth(addMonths(currentMonth, 1));
    };

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-[400px] rounded-3xl p-5 shadow-2xl overflow-hidden",
          "bg-white/3 backdrop-blur-xl border border-white/5",
          "text-gray-900 font-sans",
          className
        )}
        {...props}
      >
        <ScrollbarHide />

        {/* Date Display and Navigation */}
        <div className="mb-4 flex items-center justify-between">
          <motion.p
            key={format(currentMonth, "MMMM")}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            {format(currentMonth, "MMMM yyyy")}
          </motion.p>
          <div className="flex items-center space-x-1">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-full text-gray-800 transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 rounded-full text-gray-800 transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Week Day Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {weekDays.map((day, index) => (
            <div key={index} className="text-center text-xs font-bold text-gray-700">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Empty cells for days before month starts */}
          {Array.from({ length: startDay }).map((_, index) => (
            <div key={`empty-${index}`} className="h-8" />
          ))}
          
          {/* Actual days */}
          {monthDays.map((day) => (
            <button
              key={format(day.date, "yyyy-MM-dd")}
              onClick={() => handleDateClick(day.date)}
              className={cn(
                "h-8 w-full flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 relative",
                {
                  "bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-lg": day.isSelected,
                  "hover:bg-white/30": !day.isSelected,
                  "text-gray-800": !day.isSelected,
                }
              )}
            >
              {day.isToday && !day.isSelected && (
                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-purple-600"></span>
              )}
              {getDate(day.date)}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

GlassCalendar.displayName = "GlassCalendar";
