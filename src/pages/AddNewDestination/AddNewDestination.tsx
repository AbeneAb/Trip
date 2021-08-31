import { useEffect } from "react";
import { IDestination } from "../../common/types";
import { useAddDestination } from "./useAddDestination";
const AddNewDestination: React.FunctionComponent = () => {
  const {
    handleSubmit,
    isSubmitting,
    onValidSubmitHandler,
    onInvalidSubmitHandler,
    errors,
    register,
  } = useAddDestination();

  useEffect(()=> {
    console.log('??',errors);
  },[errors])

  return (
    <div className="w-full min-h-screen mb-10">
      <form
        onSubmit={handleSubmit(onValidSubmitHandler, onInvalidSubmitHandler)}
      >
        <div className="py-2  mt-12 space-y-8 lg:mx-32 width-full">
          {/*Page Header */}
          <div className="mx-auto space-y-2">
            <h2 className="text-2xl font-medium leading-6 text-gray-900">
              <p className="max-w-4xl text-sm text-gray-500">
                Add new{" "}
                <span className="font-bold text-indigo-500">Destination</span>
              </p>
            </h2>
          </div>

          {/*Quote Form*/}
          <div>
            <div className="md:grid md:grid-cols-3 md-gap-6">
              <div className="px-4 md:col-span-1 sm:px-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  What are your destinations
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  You can add any destination on this platform
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="px-4 py-5 space-y-6 bg-white shadow sm:rounded-md sm:overflow-hidden sm:p-6">
                  <div className="col-span-5">
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Destination Name
                      </label>
                      <div className="reactive mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          {...register("name", { required: true })}
                          placeholder="Add place name"
                          className="flex-1 block w-full px-3 py-4 border-gray-300 rounded-md shadow-sm 
                          focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-green-500 sm:text-sm"
                        ></input>
                        <p>{errors?.name?.message}</p>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image URL
                      </label>
                      <div className="reactive mt-1 rounded-md shadow-sm">
                        <input
                          type="url"
                          {...register("img", { required: true })}
                          placeholder="Add place image"
                          className="flex-1 block w-full px-3 py-4 border-gray-300 rounded-md shadow-sm 
                          focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-green-500 sm:text-sm"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="reactive mt-1 rounded-md shadow-sm">
                        <textarea
                          placeholder="Tell us what it means to you!"
                          {...register("description", { required: true })}
                          className="flex-1 block w-full px-3 py-4 border-gray-300 rounded-md shadow-sm 
                          focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-green-500 sm:text-sm"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <div className="reactive mt-1 rounded-md shadow-sm">
                        <input
                          placeholder="Mind telling us where it is?"
                          {...register("address", { required: false })}
                          className="flex-1 block w-full px-3 py-4 border-gray-300 rounded-md shadow-sm 
                          focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-green-500 sm:text-sm"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="md:grid mg:grid-cols-1 md-gap-6 ">
                    <div className="items-center justify-center flex-1 w-full md:col-end-4 md:col-span-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="items-center justify-center w-full px-6 py-3 text-sm font-medium 
                      text-white bg-yellow-400 border border-transparent rounded-md shadow-sm sm:text-base sm:inline-flex 
                      hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*Submit button */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddNewDestination;
