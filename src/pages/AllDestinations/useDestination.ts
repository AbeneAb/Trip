import { useDestinationList } from "../../common/data/destination/destinations";
import { IDestination } from "../../common/types";

export interface IUseDestinationReturnType {
  loadingDetinationLocation: boolean;
  destinationLocationList: IDestination[] | null;
}
export const useDestination = (): IUseDestinationReturnType => {
  const { loading: loadingDetinationLocation, data: destinationLocationList } =
    useDestinationList({ immediate: true });

  return {
    loadingDetinationLocation,
    destinationLocationList,
  };
};
