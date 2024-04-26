import { useEffect, useState } from "react";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  const [filter, setFilter] = useState(null);
  const [displayFilteredCountry, setDisplayFilteredCountry] = useState(false);

  useEffect(() => {
    if (displayFilteredCountry) {
      fetch("http://localhost:3310/country/French")
        .then((res) => res.json())
        .then((response) => setFilter(response));
    }
  }, [displayFilteredCountry]);


  const [displayFilteredArtist, setDisplayFilteredArtist] = useState(false);

  useEffect(() => {
    if (displayFilteredArtist) {
      fetch("http://localhost:3310/artist/Vincent")
        .then((res) => res.json())
        .then((response) => setFilter(response));
    }
  }, [displayFilteredArtist]);

  const [displayFilteredYear, setDisplayFilteredYear] = useState(false);

  useEffect(() => {
    if (displayFilteredYear) {
      fetch("http://localhost:3310/year/1655")
        .then((res) => res.json())
        .then((response) => setFilter(response));
    }
  }, [displayFilteredYear]);

  return (
    <div className={styles.catalogMain}>
      <FilterButtons
        setDisplayFilteredCountry={setDisplayFilteredCountry}
        displayFilteredCountry={displayFilteredCountry}
        setDisplayFilteredArtist={setDisplayFilteredArtist}
        displayFilteredArtist={displayFilteredArtist}
        setDisplayFilteredYear={setDisplayFilteredYear}
        displayFilteredYear={displayFilteredYear}
      />
      <h1>Votre galerie d’oeuvres d’art en libre accès</h1>
      <SearchBar />
      <div className={styles.imgContainer}>
        {filter &&
          filter.map((item) => (
            <img
              key={item.id}
              src={item.primaryImageSmall}
              alt="Filtered Painting"
            />
          ))}
      </div>
    </div>
  );
}

export default CatalogPage;
