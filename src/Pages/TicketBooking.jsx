import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../constants";
import {
  DropdownButton,
  Dropdown,
  Button,
  ToastContainer,
  Toast
} from "react-bootstrap";
export default function Home() {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === movieId);
  const [numberOfSeats, setNumberOfSeats] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const handleDropDown = (numberOfSeats) => {
    setNumberOfSeats(numberOfSeats);
  };
  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img src={movie.img} alt={movie.title}></img>
      <div style={{ marginTop: "2rem" }}>
        <DropdownButton
          id="dropdown-basic-button"
          title="Select number of seats"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Dropdown.Item href="#" onClick={() => handleDropDown(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      {numberOfSeats !== 0 && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <div style={{ marginBottom: "1rem" }}>{numberOfSeats} tickets</div>
          <Button
            type="submit"
            variant="danger"
            onClick={() => setShowToast(true)}
          >
            Confirm tickets
          </Button>{" "}
        </div>
      )}
      {showToast && (
        <ToastContainer style={{ marginTop: "1rem" }}>
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Ticket confirmation</strong>
            </Toast.Header>
            <Toast.Body>
              {numberOfSeats} tickets have been booked, Enjoy your time!.
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </div>
  );
}
