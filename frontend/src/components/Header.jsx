const Header = () => {
    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  
    return (
      <div className="w-full bg-dark-3 text-white flex justify-between p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Welcome back, Contributor!</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm">{currentTime}</span>
          <button className="bg-blue-600 px-3 py-2 rounded-lg hover:bg-blue-500">AI Assistant</button>
        </div>
      </div>
    );
  };
  
  export default Header;
  