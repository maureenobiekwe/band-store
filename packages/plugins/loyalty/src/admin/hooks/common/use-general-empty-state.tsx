import { DataTableEmptyStateProps } from "@band-store/ui";
import { useMemo } from "react";

export const useGeneralEmptyState = (): DataTableEmptyStateProps => {
  return useMemo(() => {
    const content: DataTableEmptyStateProps = {
      empty: {
        heading: "No records found",
      },
      filtered: {
        heading: "No records found",
      },
    };

    return content;
  }, []);
};
