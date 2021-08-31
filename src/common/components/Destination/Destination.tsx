import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/outline";
import { IDestination } from "../../types";
import { useContext } from "react";
import FavoriteContext from "../../../store/favorites-context";
import React from "react";

const Destination: React.FunctionComponent<{ Destination: IDestination }> = (
  props
) => {
  const ctx = useContext(FavoriteContext);
  const isFavorite = ctx.IsLocationFavorite(props.Destination.id);

  let button;
  if (isFavorite) {
    button = (
      <ThumbDownIcon
        onClick={toggleFavoriteStatusHandler}
        width={18}
        height={18}
        className="text-indigo-600"
      />
    );
  } else {
    button = (
      <ThumbUpIcon
        onClick={toggleFavoriteStatusHandler}
        width={18}
        height={18}
        className="text-indigo-600"
      />
    );
  }
  function toggleFavoriteStatusHandler() {
    debugger;
    if (isFavorite) {
      ctx.removeFavorite(props.Destination);
    } else {
      ctx.addFavorite(props.Destination);
    }
  }
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          src={props.Destination.img}
          alt={props.Destination.description}
        ></img>
      </div>
      <div className="mt-4 flex justify-between ">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href='#'>
              <span aria-hidden="true" className="absolute insert-0"></span>
              {props.Destination.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {props.Destination.description}
          </p>
        </div>
        <button
          type="button"
          className="inline-flex bg-white items-center justify-center rounded-full shadow-sm w-18 h-18 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {button}
        </button>
      </div>
    </div>
  );
};
export default Destination;
