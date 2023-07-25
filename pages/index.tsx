import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/map";
import React from "react";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD5_qFpoFGot5XjgcfFJ_6s1sPF_OrXLt8",
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}