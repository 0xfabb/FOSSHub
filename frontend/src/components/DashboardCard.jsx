const DashboardCard = ({icon, title, description}) => {
    return (
      <div className="bg-dark-3 p-6 rounded-xl text-white flex flex-col items-center justify-center w-full h-40">
        {icon}
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 text-center">{description}</p>
      </div>
    );
  };
  
  export default DashboardCard;
  