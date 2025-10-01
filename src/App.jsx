import useGuests from "./useGuests.js";
import GuestList from "./components/GuestList.jsx";
import GuestDetails from "./components/GuestDetails.jsx";
import "./index.css";

export default function App() {
  const {
    guests,
    selectedGuest,
    select,
    reset,
    loadingList,
    loadingDetail,
    error,
  } = useGuests();

  if (error) {
    return (
      <div className="panel">
        <p className="error">Error: {error}</p>
      </div>
    );
  }

  // Show details when a guest is selected
  if (selectedGuest) {
    return (
      <div className="app">
        {loadingDetail && <p className="loading">Loading details…</p>}
        <GuestDetails guest={selectedGuest} onBack={reset} />
      </div>
    );
  }

  // Otherwise show the list
  return (
    <div className="app">
      {loadingList && <p className="loading">Loading guests…</p>}
      <GuestList guests={guests} onSelect={select} />
    </div>
  );
}
