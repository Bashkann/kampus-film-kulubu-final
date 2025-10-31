import TVCard from "./TVCard";

export default function TVList({ shows, dispatch }) {
  return (
    <div className="row">
      {shows.map((show) => (
        <div key={show.id} className="col-md-4">
          <TVCard show={show} dispatch={dispatch} />
        </div>
      ))}
    </div>
  );
}

