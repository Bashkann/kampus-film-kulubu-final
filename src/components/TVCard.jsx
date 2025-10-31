export default function TVCard({ show, dispatch }) {
  return (
    <div className="card mb-4 shadow-sm">
      {/* Görsel */}
      <img
        src={show.image?.medium || "https://placehold.co/210x295?text=Poster+Yok"}
        className="card-img-top"
        alt={show.name}
      />

      <div className="card-body">
        {/* Başlık */}
        <h5 className="card-title fw-bold">{show.name}</h5>

        {/* IMDb, Dil, Türler */}
        <div className="mb-2 d-flex flex-wrap align-items-center gap-1">
          {/* IMDb Puanı */}
          <span className="badge bg-warning text-dark">
            ⭐ {show.rating?.average || "N/A"}
          </span>

          {/* Dil */}
          <span className="badge bg-info text-dark">
            🌐 {show.language || "Unknown"}
          </span>

          {/* Türler */}
          {show.genres && show.genres.length > 0 ? (
            show.genres.map((genre, i) => (
              <span key={i} className="badge bg-light text-dark">
                {genre}
              </span>
            ))
          ) : (
            <span className="badge bg-secondary text-light">Tür Bilgisi Yok</span>
          )}
        </div>

        {/* Açıklama */}
        <p
          className="card-text text-muted"
          style={{ fontSize: "0.9rem", height: "60px", overflow: "hidden" }}
          dangerouslySetInnerHTML={{
            __html: show.summary || "No description available.",
          }}
        ></p>

        {/* Butonlar */}
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-primary btn-sm">Detay</button>

          <button
            className="btn btn-warning btn-sm"
            onClick={() => dispatch({ type: "ADD_TO_WATCHLIST", payload: show })}
          >
            Gösterime Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
