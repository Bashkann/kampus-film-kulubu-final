export default function WatchlistPanel({ list, dispatch }) {
  return (
    <div className="watchlist mt-3">
      <h5 className="mb-3">🎞 Gösterime Girecekler ({list.length})</h5>

      {list.length === 0 ? (
        <p className="text-muted">Listeye eklenmiş yapım yok.</p>
      ) : (
        <ul className="list-group list-group-flush">
          {list.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{item.name}</span>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() =>
                  dispatch({ type: "REMOVE_WATCHLIST", payload: item.id })
                }
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        className="btn btn-outline-secondary w-100 mt-3"
        onClick={() => dispatch({ type: "CLEAR_WATCHLIST" })}
      >
        Listeyi Temizle
      </button>
    </div>
  );
}
