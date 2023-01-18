// ?.toDate()
export const getTime = (date: Date) => {
  // @ts-ignore
  const time = new Date(date);
  return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
