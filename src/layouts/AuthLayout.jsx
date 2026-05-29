function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center text-indigo-600">
          StudyOnly
        </h1>

        <h2 className="text-2xl font-bold text-center mt-6">
          {title}
        </h2>

        <p className="text-center text-gray-500 mt-2">
          {subtitle}
        </p>

        <div className="mt-8">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AuthLayout;