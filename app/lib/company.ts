export const COMPANY_START_YEAR = 2008;

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getCompanyYears(nowYear: number = getCurrentYear()) {
  return Math.max(0, nowYear - COMPANY_START_YEAR);
}
