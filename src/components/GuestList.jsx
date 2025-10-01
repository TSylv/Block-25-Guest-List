export default function GuestList({ guests, onSelect }) {
  return (
    <div className="panel">
      <h1>Guest List</h1>

      <table className="guest-table">
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Name</th>
            <th style={{ width: "60%" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((g) => (
            <tr
              key={g.id}
              className="row"
              onClick={() => onSelect(g.id)}
              role="button"
              title="Click to view details"
            >
              <td>{g.name}</td>
              <td>{g.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="hint">Select a guest to see more details.</p>
    </div>
  );
}
