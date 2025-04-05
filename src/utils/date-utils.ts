import { format } from "date-fns";

export class DateUtils {
  static formatDate(date: string | number | Date, formatStr: string) {
    return format(date, formatStr);
  }

  static isValidDate(
    input: string | Date,
    format?: "DMY" | "MDY" | "YMD"
  ): boolean {
    if (input instanceof Date) {
      return !isNaN(input.getTime());
    }

    // ISO or native Date.parse fallback
    if (!format) {
      const parsed = new Date(input);
      return !isNaN(parsed.getTime());
    }

    const parts = input.split(/[\/\-]/).map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return false;

    let day: number, month: number, year: number;

    switch (format) {
      case "DMY":
        [day, month, year] = parts;
        break;
      case "MDY":
        [month, day, year] = parts;
        break;
      case "YMD":
        [year, month, day] = parts;
        break;
      default:
        return false;
    }

    if (year < 1000 || year > 9999 || month < 1 || month > 12) return false;

    const maxDay = new Date(year, month, 0).getDate();
    return day >= 1 && day <= maxDay;
  }
}
