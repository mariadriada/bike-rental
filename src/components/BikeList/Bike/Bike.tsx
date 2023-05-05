import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { BikeItem } from "../../../types";

const Bike: FC<BikeItem> = ({ id, name, picture, type }: BikeItem) => {
  const handleClick = () => {
    console.log("click", id);
  };

  return (
    <Card sx={{ minWidth: 150, mt: 4 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="100" image={picture} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Bike;
