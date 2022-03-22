import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
export default function MediaCard({ category }) {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/products/get/${category._id}`)
      .then((res) => {
        setAmount(res.data.length);
      })
      .catch((err) => {});
  });
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: "auto",
        marginTop: "1rem",
        marginBottom: "1rem",
        width: "200px",
        height: "fit-content",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={category.image}
        alt="card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number of cards available: {amount}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Button size="small">View All Cards</Button>
      </CardActions>
    </Card>
  );
}
