export default function SearchBox({ dispatch }) {
  return (
    <input
      type="text"
      placeholder="Dizi ara..."
      className="form-control my-2"
      onChange={(e) => dispatch({ type: "SET_QUERY", payload: e.target.value })}
    />
  );
}
