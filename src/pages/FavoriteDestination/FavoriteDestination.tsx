import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";
import Destination from "../../common/components/Destination/Destination";
function FavoriteDestination() {
  const ctx = useContext(FavoriteContext);
  return (
    <div className="w-full min-h-screen mb-10">
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="max-w-4xl text-sm text-gray-500">
          Your favorite Destination
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:gap-x-8">
          {ctx.favorites.map((item) => (
            <Destination key={item.id} Destination={item}></Destination>
          ))}
        </div>
      </div>  
      </div>
    </div>
  );
}

export default FavoriteDestination;
