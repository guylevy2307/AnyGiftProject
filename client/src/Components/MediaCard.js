import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ card }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: "auto",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image="https://www.just4u.co.il/Pictures/12661111.jpg"
        alt="card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {card.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Value: {card.value}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Button size="small">Buy</Button>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  );
}
