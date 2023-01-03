import { Navbar, UserList } from './Components';

function Sidebar() {
  return (
    <section className="bg-primary min-h-screen w-[60%]">
      <Navbar />
      <UserList />
    </section>
  );
}

export default Sidebar;
