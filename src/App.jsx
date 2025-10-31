import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { tvReducer, initialState } from "./reducers/tvReducer";
import SearchBox from "./components/SearchBox";
import Filters from "./components/Filters";
import TVList from "./components/TVList";
import WatchlistPanel from "./components/WatchlistPanel";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
console.log("✅ App çalıştı");

function App() {
  const [state, dispatch] = useReducer(tvReducer, initialState);
  const { shows, loading, error, query, page, pageSize, watchlist } = state;

  useEffect(() => {
    async function fetchShows() {
      dispatch({ type: "FETCH_INIT" });
      try {
        const res = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${query}`
        );
        dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data.map((d) => d.show),
        });
      } catch {
        dispatch({ type: "FETCH_FAILURE" });
      }
    }
    fetchShows();
  }, [query]);

  const paginatedShows = shows.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="container mt-4">
      <h2>🎬 Kampüs Film Kulübü</h2>

      <SearchBox dispatch={dispatch} />
      <Filters dispatch={dispatch} />

      <div className="row mt-3">
        <div className="col-lg-9">
          {loading && <p>Yükleniyor...</p>}
          {error && <p>Hata oluştu!</p>}
          {!loading && !error && (
            <TVList shows={paginatedShows} dispatch={dispatch} />
          )}
          <Pagination state={state} dispatch={dispatch} />
        </div>

        <div className="col-lg-3">
          <WatchlistPanel list={watchlist} dispatch={dispatch} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
