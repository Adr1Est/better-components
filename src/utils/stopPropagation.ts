import type { MouseEvent } from "react";

export const stopPropagation = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
};