import css from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <label className={css.searchBox}>
      <span>Find contacts by name</span>
      <input type="text" className={css.searchInput} />
    </label>
  );
};

export default SearchBox;
