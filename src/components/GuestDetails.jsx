export default function GuestDetails({ guest, onBack }) {
  return (
    <div className="panel">
      <h1>Guest Details</h1>
      <div className="details">
        <p><strong>Name:</strong> {guest.name}</p>
        <p><strong>Email:</strong> {guest.email}</p>
        <p><strong>Phone:</strong> {guest.phone}</p>
        <p><strong>Job:</strong> {guest.job}</p>
        <p><strong>Bio:</strong> {guest.bio}</p>
      </div>

      <button onClick={onBack}>Back</button>
    </div>
  );
}
