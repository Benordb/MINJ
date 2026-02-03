"use client";

import { Users, Search, CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

export const SearchRoom = () => {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState(2);

  const { language } = useLanguage();
  const t = useTranslation(language);
  const router = useRouter();
  return (
    <section className="bg-white shadow-lg -mt-20 relative z-10 max-w-6xl mx-auto rounded-lg">
      <div className="p-8">
        <h2 className="text-xl lg:text-2xl font-serif font-semibold text-slate-900 mb-4 text-center lg:text-left tracking-wide uppercase">
          Өрөө хайх
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-2">
              {t.checkIn}
            </label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start font-normal py-3 relative pl-12"
                >
                  <CalendarIcon className="text-slate-400" />
                  {checkIn ? format(checkIn, "yyyy-MM-dd") : t.selectDate}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-2">
              {t.checkOut}
            </label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start font-normal py-3 relative pl-12"
                >
                  <CalendarIcon className="text-slate-400" />
                  {checkOut ? format(checkOut, "yyyy-MM-dd") : t.selectDate}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-2">
              {t.guests}
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Select
                value={guests.toString()}
                onValueChange={(value) => setGuests(Number(value))}
              >
                <SelectTrigger className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none">
                  <SelectValue>
                    {guests} {guests === 1 ? t.guest : t.guests}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? t.guest : t.guests}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <Button
              onClick={() => router.push("/#rooms")}
              className="bg-amber-400 text-black hover:bg-amber-300 shadow-xl w-full"
            >
              <Search className="w-5 h-5 mr-2 inline" />
              {t.search}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
