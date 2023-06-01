const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      {children}
    </main>
  );
};

export default MainLayout;
