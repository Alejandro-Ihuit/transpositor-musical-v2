/**
 * renderizo el contenedor principal de la aplicación.
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
function AppShell({ children }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
        {children}
      </div>
    </main>
  );
}

export default AppShell;