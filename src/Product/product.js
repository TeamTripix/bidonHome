import * as React from "react";
import Card from "@material-ui/core/Card";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import EditProduct from '../editProduct'
import Typography from "@material-ui/core/Typography";
export default function RecipeReviewCard(props) {
  const { name, description, price, quantity } = props.item.data;
  const pId = props.item.id

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={`https://source.unsplash.com/1600x900/?${name}`}
        alt="Paella dish"
      />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{name}</h3>
          <p style={{ color: "green" }}>${price}</p>
        </div>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <div
          style={{ display: "flex", alignItems: "center",justifyContent:'space-between', marginTop: "0.5rem" }}
        >
          <ShoppingCartIcon style={{ marginRight: "0.5rem" }} color="primary" />
          {quantity}
        <EditProduct pId={pId}/>
        </div>

      </CardContent>
    </Card>
  );
}
