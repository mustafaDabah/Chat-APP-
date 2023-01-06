import { NavbarMemo, Slider, UserList } from './Components';
import useGetUsers from './Hooks/useGetUsers';

function Sidebar() {
  const { users, handleSearch } = useGetUsers();

  return (
    <section className="bg-primary min-h-screen w-[40%]">
      <NavbarMemo handleSearch={handleSearch} />
      <Slider />
      <UserList users={users} />
    </section>
  );
}

export default Sidebar;
