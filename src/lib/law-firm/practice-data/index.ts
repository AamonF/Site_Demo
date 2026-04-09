import type { PracticeAreaPage } from "../types";
import { CRIMINAL_PRACTICE_PAGES } from "./criminal";
import { FAMILY_PRACTICE_PAGES } from "./family";
import { IMMIGRATION_PRACTICE_PAGES } from "./immigration";
import { PI_PRACTICE_PAGES } from "./pi";

export const PRACTICE_PAGES: PracticeAreaPage[] = [
  ...PI_PRACTICE_PAGES,
  ...CRIMINAL_PRACTICE_PAGES,
  ...FAMILY_PRACTICE_PAGES,
  ...IMMIGRATION_PRACTICE_PAGES,
];
