export default function TVCard({ show, dispatch }) {
  return (
    <div className="card mb-4">
      <img
        src={show.image?.medium || "https://placehold.co/210x295?text=Poster+Yok"}
        className="card-img-top"
        alt={show.name}
      />
      <div className="card-body">
        <h5 className="card-title">{show.name}</h5>

        <div className="mb-2">
          <span className="badge bg-warning text-dark me-2">⭐ {show.rating?.average || "N/A"}</span>
          <span className="badge bg-info text-dark me-2">{show.language || "Unknown"}</span>
          {show.genres?.slice(0, 2).map((genre, i) => (
            <span key={i} className="badge bg-light text-dark me-1">
              {genre}
            </span>
          ))}
        </div>

        <p
          className="card-text text-muted"
          style={{ fontSize: "0.9rem", height: "60px", overflow: "hidden" }}
          dangerouslySetInnerHTML={{ __html: show.summary || "No description available." }}
        ></p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-primary btn-sm">Detay</button>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => dispatch({ type: "ADD_WATCHLIST", payload: show })}
          >
            Gösterime Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
