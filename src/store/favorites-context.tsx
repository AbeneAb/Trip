import { createContext, useState } from "react";
import { IDestination } from "../common/types";

const favoriteArray: IDestination[] = [];
const FavoriteContext = createContext({
    favorites: favoriteArray,
    totalFavorites: 0,
    addFavorite: (favorite:IDestination)=>{},
    removeFavorite: (favorite:IDestination)=>{},
    IsLocationFavorite:(id:string):boolean => {return false;}
  });
export function FavoriteContextProvider(props: any) {

  const [userFavorite, SetUserFavorite] = useState<IDestination[]>([]);
  function AddFavoriteHandler(favorite: IDestination) {
    SetUserFavorite((prevFavorite) => {
      return prevFavorite.concat(favorite);
    });
  }
  function RemoveFavoriteHandler(favorite: IDestination) {
    SetUserFavorite((prevFavorite) => {
      return prevFavorite.filter((prev) => prev.id !== favorite.id);
    });
  }
  function IsLocationFavoriteHandler(id: string): boolean {
    let data = userFavorite.some((location) => location.id === id);
    return data;
  }
  const context = {
    favorites: userFavorite,
    totalFavorites: userFavorite.length,
    addFavorite:AddFavoriteHandler,
    removeFavorite:RemoveFavoriteHandler,
    IsLocationFavorite:IsLocationFavoriteHandler
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
