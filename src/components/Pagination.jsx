export default function Pagination({ state, dispatch }) {
  const { page, shows, pageSize } = state;
  const totalPages = Math.ceil(shows.length / pageSize);

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <button
        className="btn btn-light mx-1"
        disabled={page === 1}
        onClick={() => dispatch({ type: "SET_PAGE", payload: page - 1 })}
      >
        Önceki
      </button>
      <span className="mx-2">{page} / {totalPages}</span>
      <button
        className="btn btn-light mx-1"
        disabled={page === totalPages}
        onClick={() => dispatch({ type: "SET_PAGE", payload: page + 1 })}
      >
        Sonraki
      </button>
    </div>
  );
}
