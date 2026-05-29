function Topbar() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">

      <div>
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back to StudyOnly
        </p>
      </div>

      <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
        N
      </div>

    </div>
  );
}

export default Topbar;