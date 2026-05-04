import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

import parkingGaragesClient from "@/clients/parking-garages-client";
import { ParkingGarageRecord } from "@/types";

export default function useParkingGarage() {
  const params = useParams();
  const [data, setData] = useState<ParkingGarageRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const garageItem = useMemo(() => {
    return data.find(({ recordid }) => recordid === params.id);
  }, [data, params.id]);

  return {
    garageItem,
    loading,
    error,
  };
}
