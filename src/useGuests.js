import { useEffect, useState } from "react";
import { fetchGuests, fetchGuestById } from "./api";

export default function useGuests() {
  const [guests, setGuests] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedGuest, setSelectedGuest] = useState(null);

  const [loadingList, setLoadingList] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const ac = new AbortController();
    setLoadingList(true);
    setError(null);

    fetchGuests(ac.signal)
      .then(setGuests)
      .catch((e) => {
        if (e.name !== "AbortError") setError(e.message);
      })
      .finally(() => setLoadingList(false));

    return () => ac.abort();
  }, []);

  useEffect(() => {
    if (selectedId == null) {
      setSelectedGuest(null);
      return;
    }

    const ac = new AbortController();
    setLoadingDetail(true);
    setError(null);

    fetchGuestById(selectedId, ac.signal)
      .then(setSelectedGuest)
      .catch((e) => {
        if (e.name !== "AbortError") setError(e.message);
      })
      .finally(() => setLoadingDetail(false));

    return () => ac.abort();
  }, [selectedId]);

  function select(id) {
    setSelectedId(id);
  }

  function reset() {
    setSelectedId(null);
    setSelectedGuest(null);
  }

  return {
    guests,
    selectedId,
    selectedGuest,
    select,
    reset,
    loadingList,
    loadingDetail,
    error,
  };
}
