import { useEffect } from "react";
import { useDestination } from "./useDestination";
import Destination from "../../common/components/Destination/Destination";
const NewAllDestinations: React.FunctionComponent = () => {
  const { loadingDetinationLocation, destinationLocationList } =
    useDestination();

  //const [orders, setOrders] = useState<Orders[]>([]);
  // useEffect(() => {
  //   apiClient.get<Orders[]>('/Order').then((response:any)=> {
  //     setOrders(response.data)
  //   })

  // }, []);
  useEffect(() => {
    console.log("Loading Destination Changed");
  }, [loadingDetinationLocation]);

  return (
    <div className="w-full min-h-screen mb-10">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-700">
            All Destination for your pleasure!
          </h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:gap-x-8">
            {destinationLocationList?.map((item) => (
              <Destination key={item.id} Destination={item}></Destination>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewAllDestinations;
