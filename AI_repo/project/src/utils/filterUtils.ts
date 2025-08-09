export interface Document {
  id: string;
  title: string;
  url: string;
  aiApplications: string[];
  category: string;
  state: string;
  year: number | null;
  focusAreas: string[];
  clinicalCategories: string[];
  description: string;
}

export interface FilterState {
  focusAreas: string[];
  categories: string[];
  state: string;
  yearRange: [number, number];
  aiApplications: string[];
  clinicalCategories: string[];
}

export const FOCUS_AREAS = [
  "Bias and fairness",
  "Reliability and performance", 
  "Privacy and security",
  "Transparency and explainability",
  "Ethics and consent",
  "Safety and risk management",
  "Governance committees"
];

export const CATEGORIES = [
  "Federal government",
  "State government", 
  "Nonprofit org",
  "Academic institution (.edu)",
  "Professional medical organization"
];

export const AI_APPLICATIONS = [
  "Clinical Decision Support",
  "Clinical Documentation AI",
  "Medical Imaging AI", 
  "Predictive Analytics",
  "Operational and Administrative Automation",
  "Patient-facing AI",
  "Robotics and Surgical AI",
  "Education and Training AI",
  "Research and Clinical Trial AI",
  "Public Health AI"
];

export const CLINICAL_CATEGORIES = [
  "Cardiology",
  "Radiology", 
  "Oncology",
  "Pathology",
  "Gastroenterology",
  "Internal Medicine",
  "Psychiatry",
  "Primary care and Family Medicine",
  "Emergency Medicine",
  "Critical care"
];

/**
 * Normalizes filter values for consistent comparison
 */
export const normalizeFilterValue = (value: string): string => {
  return value.toLowerCase().trim();
};

/**
 * Checks if arrays have any common elements (case-insensitive)
 */
export const hasCommonElements = (arr1: string[], arr2: string[]): boolean => {
  if (!arr1.length || !arr2.length) return false;
  
  const normalized1 = arr1.map(normalizeFilterValue);
  const normalized2 = arr2.map(normalizeFilterValue);
  
  return normalized1.some(item => normalized2.includes(item));
};

/**
 * Checks if a string matches any of the filter values (case-insensitive)
 */
export const matchesFilter = (value: string, filters: string[]): boolean => {
  if (!filters.length) return true;
  
  const normalizedValue = normalizeFilterValue(value);
  const normalizedFilters = filters.map(normalizeFilterValue);
  
  return normalizedFilters.includes(normalizedValue);
};

/**
 * Filters documents based on current filter state
 */
export const filterDocuments = (documents: Document[], filters: FilterState): Document[] => {
  return documents.filter(doc => {
    // Focus Areas filter
    if (filters.focusAreas.length > 0) {
      if (!hasCommonElements(doc.focusAreas, filters.focusAreas)) {
        return false;
      }
    }

    // Category filter
    if (filters.categories.length > 0) {
      if (!matchesFilter(doc.category, filters.categories)) {
        return false;
      }
    }

    // State filter
    if (filters.state && filters.state !== 'all') {
      if (normalizeFilterValue(doc.state) !== normalizeFilterValue(filters.state)) {
        return false;
      }
    }

    // Year range filter
    if (doc.year !== null) {
      if (doc.year < filters.yearRange[0] || doc.year > filters.yearRange[1]) {
        return false;
      }
    }

    // AI Applications filter
    if (filters.aiApplications.length > 0) {
      if (!hasCommonElements(doc.aiApplications, filters.aiApplications)) {
        return false;
      }
    }

    // Clinical Categories filter
    if (filters.clinicalCategories.length > 0) {
      if (!hasCommonElements(doc.clinicalCategories, filters.clinicalCategories)) {
        return false;
      }
    }

    return true;
  });
};

/**
 * Gets unique states from documents array
 */
export const getUniqueStates = (documents: Document[]): string[] => {
  const states = documents
    .map(doc => doc.state)
    .filter(state => state && state.trim() !== '')
    .map(state => state.trim());
  
  return Array.from(new Set(states)).sort();
};

/**
 * Gets year range from documents array
 */
export const getYearRange = (documents: Document[]): [number, number] => {
  const years = documents
    .map(doc => doc.year)
    .filter((year): year is number => year !== null);
  
  if (years.length === 0) return [2000, 2025];
  
  return [Math.min(...years), Math.max(...years)];
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Gets active filter count
 */
export const getActiveFilterCount = (filters: FilterState): number => {
  let count = 0;
  
  if (filters.focusAreas.length > 0) count++;
  if (filters.categories.length > 0) count++;
  if (filters.state && filters.state !== 'all') count++;
  if (filters.aiApplications.length > 0) count++;
  if (filters.clinicalCategories.length > 0) count++;
  
  return count;
};