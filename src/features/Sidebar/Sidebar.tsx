import { NavbarMemo, Slider, UserListMemo } from './Components';
import useGetUsers from './Hooks/useGetUsers';

function Sidebar() {
  const { users, handleSearch } = useGetUsers();
  // w-[500px] lg:w-[30%]    hdden
  return (
    <section className="bg-primary min-h-screen z-10 w-full lg:w-[30%] hidden">
      <NavbarMemo handleSearch={handleSearch} />
      <Slider users={users} />
      <UserListMemo />
    </section>
  );
}

export default Sidebar;
