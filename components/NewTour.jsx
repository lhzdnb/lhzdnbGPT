"use client";

import TourInfo from "@/components/TourInfo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createNewTour,
  generateTourResponse,
  getExistingTour,
} from "@/utils/action";
import toast from "react-hot-toast";
import LoadingText from "@/components/LoadingText";

function NewTour(props) {
  const queryClient = useQueryClient();
  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const existingTour = await getExistingTour(destination);
      if (existingTour) return existingTour;

      const newTour = await generateTourResponse(destination);
      if (newTour) {
        console.log(newTour);
        await createNewTour(newTour);
        queryClient.invalidateQueries({ queryKey: ["tours"] });
        return newTour;
      }
      toast.error("No matching city found...");
      return null;
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4 font-bold">Select your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full focus:ring-gray-200 focus:ring-2 focus:ring-inset focus:outline-none"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item w-full focus:ring-gray-200 focus:ring-2 focus:ring-inset focus:outline-none"
            placeholder="country"
            name="country"
            required
          />
          <button className="btn btn-primary join-item">Generate Tour</button>
        </div>
        {isPending && <LoadingText />}
        <div className="mt-16">{tour && <TourInfo tour={tour} />}</div>
      </form>
    </>
  );
}

export default NewTour;
