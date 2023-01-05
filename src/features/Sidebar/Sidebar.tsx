import { NavbarMemo, UserList } from './Components';
import useGetUsers from './Hooks/useGetUsers';

function Sidebar() {
  const { users, handleSearch } = useGetUsers();

  return (
    <section className="bg-primary min-h-screen w-[60%]">
      <NavbarMemo handleSearch={handleSearch} />
      <UserList users={users} />
    </section>
  );
}

export default Sidebar;
