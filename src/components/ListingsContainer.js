import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, updatedListings}) {
 
  function handleDeleteListing(deletedListing) {
    updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
  }

  

  return (
    <main>
      <ul className="cards">
        {updatedListings.map((listing) => (
          <ListingCard
            key={listing.id} listing={listing}
            onDeleteListing = {handleDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
