"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllTours } from "@/utils/action";
import ToursList from "@/components/ToursList";
import { useState } from "react";

function ToursPage(props) {
  const [searchValue, setSearchValue] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["tours", searchValue],
    queryFn: () => getAllTours(searchValue),
  });

  return (
    <>
      <form className="max-w-lg mb-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="enter city or country here..."
            className="input input-bordered join-item w-full focus:ring-gray-200 focus:ring-2 focus:ring-inset focus:outline-none"
            value={searchValue}
            required
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="btn btn-primary join-item"
            type="button"
            disabled={isPending}
            onClick={() => setSearchValue("")}
          >
            {isPending && <span className="loading"></span>}
            {isPending ? "Please Wait..." : "reset"}
          </button>
        </div>
      </form>
      {isPending ? (
        <div className="flex justify-center items-center mt-4 min-w-full">
          <span className="loading loading-lg"></span>
        </div>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
}

export default ToursPage;
