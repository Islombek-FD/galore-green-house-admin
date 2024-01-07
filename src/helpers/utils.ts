export const getQuery = (page: number, limit: number, search: string): string => {
  return `page=${page}&limit=${limit}&search_data=${search}`;
};
