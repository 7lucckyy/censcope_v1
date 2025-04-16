import { parseAsString, parseAsIsoDateTime, parseAsArrayOf } from "nuqs";

// Parser for the start date of the range (YYYY-MM-DD format in URL)
export const dateParser = parseAsIsoDateTime.withOptions({
  shallow: false, // opt-in to notify the server (Next.js only)
}); // Returns Date | null

export const authorIdParser = parseAsString.withDefault("").withOptions({
  shallow: false,
});
export const qParser = parseAsString.withDefault("").withOptions({
  shallow: false,
});

// Parser for tag IDs (comma-separated string in URL, e.g., ?tags=id1,id2,id3)
export const tagIdsParser = parseAsArrayOf(parseAsString)
  .withDefault([])
  .withOptions({
    shallow: false, // opt-in to notify the server (Next.js only)
  }); // Default to empty array if not present
