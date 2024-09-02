
const Sidebar: React.FC = () => {
  return (
    <nav className="w-1/6 bg-[#2A1C47] h-screen fixed p-2">
      <div className="flex flex-col items-center justify-start h-full space-y-4 pt-8">
        <a href="#" className="text-white text-3xl font-bold hover:text-[#E6556A]">Home</a>
        <a href="#" className="text-white text-3xl font-bold hover:text-[#E6556A]">About</a>
        <a href="#" className="text-white text-3xl font-bold hover:text-[#E6556A]">Work</a>
        <a href="#" className="text-white text-3xl font-bold hover:text-[#E6556A]">Contact</a>
      </div>
    </nav>
  );
}

export default Sidebar;