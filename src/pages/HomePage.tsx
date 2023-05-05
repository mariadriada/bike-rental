import { useEffect } from "react";
import { Typography } from "@mui/material";
import { useGlobalStore } from "../redux-toolkit/store";
import { BikeList } from "../components/BikeList";

const HomePage = () => {
  const { getBikeList, bikeSelect } = useGlobalStore();
  const { bikeList, error, loading } = bikeSelect;

  console.log("HOME", bikeList, error, loading);

  useEffect(() => {
    getBikeList();
  }, []);

  return (
    <>
      <Typography variant="h2" component="h2">
        Bicycles to rent
      </Typography>
      <BikeList list={bikeList} />
    </>
  );
};

export default HomePage;
