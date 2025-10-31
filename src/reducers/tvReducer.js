export const initialState = {
  shows: [],
  loading: false,
  error: null,
  query: "star",
  filters: { genre: "all", language: "all", rating: 0 },
  watchlist: [],
  page: 1,
  pageSize: 6,
};

export function tvReducer(state, action) {
  switch (action.type) {
    // 📡 API yükleniyor
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };

    // ✅ API başarılı
    case "FETCH_SUCCESS":
      return { ...state, loading: false, shows: action.payload };

    // ❌ API hatası
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: "Veri alınamadı." };

    // 🔍 Arama sorgusu güncellendi
    case "SET_QUERY":
      return { ...state, query: action.payload, page: 1 };

    // 🎚️ Filtreler değişti
    case "SET_FILTERS":
      return { ...state, filters: action.payload };

    // 🎬 Gösterime eklendi
    case "ADD_TO_WATCHLIST":
      // Aynı id zaten varsa tekrar ekleme
      if (state.watchlist.some((item) => item.id === action.payload.id)) {
        return state;
      }
      return { ...state, watchlist: [...state.watchlist, action.payload] };

    // ❌ Listeden kaldır
    case "REMOVE_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.id !== action.payload),
      };

    // 🧹 Listeyi temizle
    case "CLEAR_WATCHLIST":
      return { ...state, watchlist: [] };

    // 📄 Sayfa değişti
    case "SET_PAGE":
      return { ...state, page: action.payload };

    default:
      return state;
  }
}
