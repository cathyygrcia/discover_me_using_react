export default function Searchbar() {
  return (
    <>
      <label className="flex justify-center mt-8">
        <input
          type="text"
          className="bg-black w-2/5 rounded-2xl p-2 text-white outline-none"
          placeholder="Search..."
        />
      </label>
      <div className="flex justify-center">
        <button
          type="button"
          className="rounded-2xl my-4 ml-6 p-3.5 bg-black text-white"
        >
          Search by Artist
        </button>
        <button
          type="button"
          className="rounded-2xl my-4 ml-6 p-3.5 bg-black text-white"
        >
          Search by Genre
        </button>
      </div>
    </>
  );
}
