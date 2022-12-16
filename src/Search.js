import { useGlobalContext } from "./context";

function Search() {
  const {  setQuery, isError } = useGlobalContext();

  return (
    <>
      <section className="search-section">
        <h1>Search your favourite movie</h1>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Search here"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>

        <div className="card-error">
          <p> {isError.show && isError.msg} </p>
        </div>
      </section>
    </>
  );
}
export default Search;
