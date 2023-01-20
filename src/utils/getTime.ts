import { Timestamp } from 'firebase/firestore';

export const getTime = (timestamp: Timestamp) => {
  if (Object.keys(timestamp).length > 0) {
    const date = timestamp.toDate();
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  return null;
};
