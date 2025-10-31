import { useMemo } from "react";

export default function Filters({ dispatch, filters, shows }) {
  // shows boşsa [] döndür (Vercel build hatasını önler)
  const genres = useMemo(() => {
    if (!shows || shows.length === 0) return ["all"];
    const allGenres = shows.flatMap((s) => s.genres || []);
    return ["all", ...new Set(allGenres)];
  }, [shows]);

  const languages = useMemo(() => {
    if (!shows || shows.length === 0) return ["all"];
    const allLanguages = shows.map((s) => s.language || "Unknown");
    return ["all", ...new Set(allLanguages)];
  }, [shows]);

  return (
    <div className="d-flex flex-wrap gap-2 mt-3">
      {/* Tür seçimi */}
      <select
        className="form-select w-auto"
        value={filters.genre}
        onChange={(e) =>
          dispatch({
            type: "SET_FILTERS",
            payload: { ...filters, genre: e.target.value },
          })
        }
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre === "all" ? "Tüm Türler" : genre}
          </option>
        ))}
      </select>

      {/* Dil seçimi */}
      <select
        className="form-select w-auto"
        value={filters.language}
        onChange={(e) =>
          dispatch({
            type: "SET_FILTERS",
            payload: { ...filters, language: e.target.value },
          })
        }
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang === "all" ? "Tüm Diller" : lang}
          </option>
        ))}
      </select>

      {/* IMDb minimum puan */}
      <select
        className="form-select w-auto"
        value={filters.rating}
        onChange={(e) =>
          dispatch({
            type: "SET_FILTERS",
            payload: { ...filters, rating: Number(e.target.value) },
          })
        }
      >
        {[0, 5, 6, 7, 8, 9].map((r) => (
          <option key={r} value={r}>
            Min Puan ({r}+)
          </option>
        ))}
      </select>
    </div>
  );
}
