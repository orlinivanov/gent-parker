import parkingGaragesClient from "@/clients/parking-garages-client";
import { ParkingGarageRecord } from "@/types";
import { useEffect, useMemo, useState } from "react";

export default function useParkingGaragesList() {
  const [data, setData] = useState<ParkingGarageRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [orderBy, setOrderBy] = useState("nameUp");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    parkingGaragesClient
      .getAllParkingGarages()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const records = useMemo(() => {
    const sortedData = [
      ...data.filter((record) =>
        record.fields.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    ];
    switch (orderBy) {
      case "nameUp":
        sortedData.sort((a, b) => a.fields.name.localeCompare(b.fields.name));
        break;
      case "nameDown":
        sortedData.sort((a, b) => b.fields.name.localeCompare(a.fields.name));
        break;
      case "availableCapacityUp":
        sortedData.sort(
          (a, b) => a.fields.availablecapacity - b.fields.availablecapacity,
        );
        break;
      case "availableCapacityDown":
        sortedData.sort(
          (a, b) => b.fields.availablecapacity - a.fields.availablecapacity,
        );
        break;
    }
    return sortedData;
  }, [data, orderBy, searchQuery]);

  return {
    records,
    loading,
    error,
    orderBy,
    setOrderBy,
    searchQuery,
    setSearchQuery,
  };
}
