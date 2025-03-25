import Icon from "./Icon";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="relative left-12 w-fit h-fit">
        <Icon name="search" />
      </div>
      <input
        type="search"
        placeholder="search title or #tag"
        className="border border-black rounded-xl w-full max-w-lg h-12 px-16 py-4"
      />
    </div>
  );
};

export default SearchBar;
