import { FC } from "react";
import { Skeleton, Box } from "@mui/material";

const Loading: FC = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export default Loading;
