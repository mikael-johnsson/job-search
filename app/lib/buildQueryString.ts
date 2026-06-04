export const buildQueryString = (params: Record<string, string[]>) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, values]) => {
    values.forEach((value) => searchParams.append(key, value));
  });

  return searchParams.toString();
};
