import Container from "../share/Container";

const SearchBar = () => {
  return (
    <Container className="my-20">
      <form className="flex flex-col md:flex-row items-center justify-center gap-5 p-5 bg-[#135F4A] shadow-lg rounded border">
        {/* Location Input */}
        <input
          type="text"
          placeholder="Location"
          className="border border-gray-300 p-2 rounded w-full focus:outline-none"
        />

        {/* Price Range */}
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Min Price"
            className="border border-gray-300 p-2 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Max Price"
            className="border border-gray-300 p-2 rounded focus:outline-none"
          />
        </div>

        {/* Property Type */}
        <select className="border border-gray-300 p-2 rounded w-full focus:outline-none">
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-[#67A47B] text-white p-2 rounded w-full"
        >
          Search
        </button>
      </form>
    </Container>
  );
};

export default SearchBar;
