import { NavbarMemo, Slider, UserListMemo } from './Components';
import useGetUsers from './Hooks/useGetUsers';

function Sidebar() {
  const { users, handleSearch } = useGetUsers();
  // w-[500px]
  return (
    <section className="bg-primary min-h-screen z-10 absolute w-full lg:w-[30%]    hdden">
      <NavbarMemo handleSearch={handleSearch} />
      <Slider users={users} />
      <UserListMemo />
    </section>
  );
}

export default Sidebar;
