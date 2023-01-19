import { useMobileScreen } from '../../store/mobileScreen';
import { NavbarMemo, SliderTwoMemo, UserListMemo } from './Components';
import useGetUsers from './Hooks/useGetUsers';

function Sidebar() {
  const { users, handleSearch } = useGetUsers();
  const isSelectUser = useMobileScreen((state) => state.isSelectUser);

  return (
    <section className={`bg-primary min-h-screen z-10 w-full lg:w-[30%] ${isSelectUser ? 'hidden' : 'block'} lg:block animate-fadeIn`}>
      <NavbarMemo handleSearch={handleSearch} />
      <SliderTwoMemo users={users} />
      <UserListMemo />
    </section>
  );
}

export default Sidebar;
