"use client";

import * as React from "react";
import { format } from "date-fns";
import { User, Calendar as CalendarIcon, X } from "lucide-react";

import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TagInput } from "@/components/editor/tag-input";
import { SelectTag, SelectUser } from "@/db/schema";

type Author = Pick<SelectUser, "email" | "name" | "id">;

interface PostFiltersProps {
  availableTags: SelectTag[];
  availableAuthors: Author[];
  initialFilters?: PostFilterState;
  onFilterChange: (filters: PostFilterState) => void;
}

export function PostFilters({
  availableTags,
  availableAuthors,
  initialFilters = {},
  onFilterChange,
}: PostFiltersProps) {
  const [selectedTags, setSelectedTags] = React.useState<SelectTag[]>(
    initialFilters.selectedTags ?? []
  );
  const [selectedAuthorId, setSelectedAuthorId] = React.useState<string | null>(
    initialFilters.selectedAuthorId ?? null
  );
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    initialFilters.dateRange
  );

  // State to track if filters are currently applied (different from initial)
  const [isFiltered, setIsFiltered] = React.useState(false);

  // Effect to notify parent component on any filter change
  //   React.useEffect(() => {
  //     const filters: PostFilterState = {
  //       selectedTags,
  //       selectedAuthorId,
  //       dateRange,
  //     };
  //     onFilterChange(filters);

  //     // Check if any filter is active
  //     const active =
  //       selectedTags.length > 0 || !!selectedAuthorId || !!dateRange?.from;
  //     setIsFiltered(active);
  //   }, [selectedTags, selectedAuthorId, dateRange, onFilterChange]);

  const handleAuthorChange = (authorId: string) => {
    setSelectedAuthorId(authorId === "all" ? null : authorId);
  };

  const handleTagChange = (tagIds: string[]) => {
    setSelectedTags(availableTags.filter((t) => tagIds.includes(t.id)));
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedAuthorId(null);
    setDateRange(undefined);
    // The useEffect above will trigger onFilterChange with cleared state
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date-range"
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !dateRange && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "LLL dd, y")} -{" "}
                    {format(dateRange.to, "LLL dd, y")}
                  </>
                ) : (
                  format(dateRange.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
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
        <Select
          value={selectedAuthorId ?? "all"}
          onValueChange={handleAuthorChange}
        >
          <SelectTrigger
            id="author-select"
            className="w-full text-muted-foreground justify-start text-left font-normal"
          >
            <User className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select author" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Authors</SelectItem>
            {availableAuthors.map((author) => (
              <SelectItem key={author.id} value={author.id}>
                {author.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
          <TagInput
            availableTags={availableTags}
            initialSelectedTags={selectedTags}
            onChange={handleTagChange}
            placeholder="Filter by tags..."
          />
        </div>
      </div>

      {isFiltered && (
        <div className="mt-4 flex justify-end">
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="mr-2 h-4 w-4" />
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}

interface PostFilterState {
  selectedTags: SelectTag[];
  selectedAuthorId: string | null;
  dateRange?: { from?: Date; to?: Date };
}

interface BlogFiltersProps {
  tags: SelectTag[];
  authors: Author[];
}
export function BlogFilters({ tags, authors }: BlogFiltersProps) {
  const handleFiltersUpdate = (filters: PostFilterState) => {
    console.log("Filters updated:", filters);
  };

  return (
    <PostFilters
      availableTags={tags}
      availableAuthors={authors}
      onFilterChange={handleFiltersUpdate}
      // Example initial filters:
      // initialFilters={{
      //     selectedAuthorId: 'a1',
      //     dateRange: { from: new Date(2025, 3, 1), to: new Date(2025, 3, 10) }
      // }}
    />
  );
}
