import { useEffect, useRef } from 'react';
import { MessageType } from '../../../utils/Types/types';

function useScroll(message: MessageType['message']) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [message]);

  return ref;
}

export default useScroll;
