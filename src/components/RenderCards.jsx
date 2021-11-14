import React from "react";
import { Card, Button } from "react-bootstrap";
import { movies } from "../constants";
import { Link } from "react-router-dom";

const RenderCards = () => {
  return (
    <div
      class="mt-4"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      {movies.map((movie) => {
        return (
          <Card style={{ width: "18rem" }} key={movie.uid}>
            <Card.Img variant="top" src={movie.img} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.genre}</Card.Text>
              <Link to={`/movies/${movie.id}`}>
                <Button variant="danger">Book Tickets</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default RenderCards;
