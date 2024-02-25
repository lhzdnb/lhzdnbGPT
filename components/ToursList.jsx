import React from "react";
import { linkGc } from "next/dist/client/app-link-gc";
import TourCard from "@/components/TourCard";

function ToursList({ data }) {
  if (!data.length) {
    return <h4 className="text-lg">No tour found...</h4>;
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default ToursList;
