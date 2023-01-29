import { useMobileScreen } from '../../store/mobileScreen';
import { NavbarMemo, AllUserListMemo, DirectMessageListMemo } from './Components';
import useGetUsers from './Hooks/useGetUsers';

function Sidebar() {
  const { users, handleSearch } = useGetUsers();
  const isSelectUser = useMobileScreen((state) => state.isSelectUser);

  return (
    <section className={`bg-gradient-to-bl from-[#0a051e] bg-[#291c63] to-[#3d0898] min-h-screen z-10 w-full lg:w-[35%] ${isSelectUser ? 'hidden' : 'block'} lg:block animate-fadeInLeft`}>
      <NavbarMemo handleSearch={handleSearch} />
      <AllUserListMemo users={users} />
      <DirectMessageListMemo />
    </section>
  );
}

export default Sidebar;
