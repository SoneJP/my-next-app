function Sidebar() {
   const sideMenus = ["Education", "Work",];
   return (
      <div className="flex flex-col gap-2 rounded-3xl bg-black w-fit p-8">
         {sideMenus.map((e) => (
            <div key={e} className="text-white text-2xl font-bold">
                <span className="cursor-pointer">
                    {e}
                </span>
            </div>
         ))}
      </div>
   );
}

export default Sidebar;
