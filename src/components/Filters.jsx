export default function Filters() {
  return (
    <div className="d-flex gap-3 mb-2">
      <select className="form-select w-auto">
        <option>Tüm Türler</option>
      </select>
      <select className="form-select w-auto">
        <option>Tüm Diller</option>
      </select>
      <select className="form-select w-auto">
        <option>Min Puan (0+)</option>
      </select>
    </div>
  );
}
