import { NavbarMemo, Slider, UserListMemo } from './Components';
import useGetUsers from './Hooks/useGetUsers';

function Sidebar() {
  const { users, handleSearch } = useGetUsers();

  return (
    <section className="bg-primary min-h-screen w-[40%]">
      <NavbarMemo handleSearch={handleSearch} />
      <Slider users={users} />
      <UserListMemo />
    </section>
  );
}

export default Sidebar;
