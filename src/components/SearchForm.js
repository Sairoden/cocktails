import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  console.log(searchValue);

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSearchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={handleSearchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;