import { FC } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { BikeListProps } from "../../types";
import { Bike } from "./Bike";

const BikeList: FC<BikeListProps> = ({ list }: BikeListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        p: 1,
        m: 1,
        bgcolor: "",
        borderRadius: 1,
      }}
    >
      {list.map((item, i) => (
        <Bike key={i} {...item} />
      ))}
    </Box>
  );
};

export default BikeList;
