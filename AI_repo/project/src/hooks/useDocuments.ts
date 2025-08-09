import { useState, useEffect, useMemo } from 'react';
import { Document, FilterState, filterDocuments, getUniqueStates, getYearRange } from '../utils/filterUtils';
import { processedDocuments } from '../data/processedDocuments';

export const useDocuments = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        setLoading(true);
        // Use the processed documents from the classification data
        setDocuments(processedDocuments);
        console.log(`Loaded ${processedDocuments.length} documents`);
      } catch (err) {
        setError('Failed to load documents');
        console.error('Error loading documents:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDocuments();
  }, []);

  const availableStates = useMemo(() => getUniqueStates(documents), [documents]);
  const yearRange = useMemo(() => getYearRange(documents), [documents]);

  const filterDocumentsWithState = (filters: FilterState) => {
    return filterDocuments(documents, filters);
  };

  return {
    documents,
    loading,
    error,
    availableStates,
    yearRange,
    filterDocuments: filterDocumentsWithState
  };
};