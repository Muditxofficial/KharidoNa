import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
});

const MainPage = () => {
  const msg = useContext(Context);
  const { propertyListing } = msg;
  const classes = useStyles();

  return (
    <>
      <Container>
        <Filter />
        <h2>Main Catlog of Properties:</h2>
        <Grid container spacing={3}>
          {propertyListing.map((x) => (
            <Grid item xs={12} sm={4} key={x.id}>
              <Card className={classes.card}>
                <CardMedia
                  image={`/server/${x.image}`}
                  className={classes.media}
                />
                <CardContent>
                  <Typography variant="h3" color="primary">
                    {x.title}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    {x.description}
                  </Typography>
                  <Typography variant="h5" color="primary">
                    Price:${x.price}
                  </Typography>
                  <Button variant="contained" color="primary">
                    <Link to={`/details/${x.id}`}>Go to property</Link>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MainPage;
/*{propertyListing.map((x) => ())}*/
