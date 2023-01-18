import { useMobileScreen } from '../../store/mobileScreen';
import { NavbarMemo, Slider, UserListMemo } from './Components';
import useGetUsers from './Hooks/useGetUsers';

function Sidebar() {
  const { users, handleSearch } = useGetUsers();
  const isSelectUser = useMobileScreen((state) => state.isSelectUser);

  // w-[500px] lg:w-[30%]    hdden
  return (
    <section className={`bg-primary min-h-screen z-10 w-full lg:w-[30%] ${isSelectUser ? 'hidden' : 'block'} lg:block`}>
      <NavbarMemo handleSearch={handleSearch} />
      <Slider users={users} />
      <UserListMemo />
    </section>
  );
}

export default Sidebar;
