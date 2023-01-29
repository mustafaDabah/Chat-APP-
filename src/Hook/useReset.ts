import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../store/currentUser';
import { useMobileScreen } from '../store/mobileScreen';
import { useStore } from '../store/store';

function useReset() {
  const resetCurrentUser = useCurrentUser((state) => state.resetCurrentUser);
  const resetUserChat = useStore((state) => state.resetUserChat);
  const resetIsSelectUser = useMobileScreen((state) => state.resetIsSelectUser);
  const navigate = useNavigate();

  const logout = () => {
    resetCurrentUser();
    localStorage.removeItem('currentUser');
    resetUserChat();
    resetIsSelectUser();
    navigate('/login');
  };

  return logout;
}

export default useReset;
