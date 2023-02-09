import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch ] = useState("")
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => setListings(listings));
  }, []);

  const updatedListings = (listings.filter((listing) => (
    listing.description.toLowerCase().includes(search.toLowerCase())
  )))
  // setListings(updatedListings)

  return (
    <div className="app">
      <Header search = {search} setSearch={setSearch}/>
      <ListingsContainer 
        listings={listings} updatedListings={updatedListings}
      />
    </div>
  );
}

export default App;
