import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

//MUI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { GetBookingByIdAction } from "../actions/BookingAction";
import { GetBookingsIdReducer } from "../reducers/BookingReducer";
import CircularStatic from "./loading";

//CSS
import "./booking.css";
import CheckCircle from "@mui/icons-material/CheckCircle";
import PendingActions from "@mui/icons-material/PendingActions";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@material-ui/core";

const steps = ["Booking Confirmed", "Sample Collected", "Report is Ready"];

const BookingDescription = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  var stepc = 1;

  const { loading, Bookings } = useSelector(
    (state) => state.GetBookingsIdReducer
  );

  useEffect(() => {
    dispatch(GetBookingByIdAction({ id }));
  }, [id]);

  if (Bookings && Bookings[0].isSampleCollected) {
    stepc = 2;
  }

  if (Bookings && Bookings[0].isdelivered === "true") {
    stepc = 3;
  }

  return (
    <div>
      <div id="BackGround-3"></div>
      <div id="BackGround-2">
        <br />
        {loading && <CircularStatic />}

        {Bookings && (
          <div>
            <h2>
              {" "}
              {Bookings[0].name} {Bookings[0].lname}{" "}
            </h2>
            <h4>
              {" "}
              Age: {Bookings[0].age} &nbsp; &nbsp; Gender: {Bookings[0].gender}{" "}
            </h4>
            <h4>
              {" "}
              {Bookings[0].date} &nbsp; &nbsp; Time :{" "}
              {Bookings[0].time.substr(0, 5)}{" "}
            </h4>
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={stepc} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label} style={{ color: "green" }}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <hr style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }} />

            <section
              style={{
                textAlign: "left",
                marginLeft: "10%",
                marginRight: "auto",
              }}
              className="grid-1"
            >
              <p>
                <span style={{ fontWeight: "bold" }}> Booked On:</span>{" "}
                {new Date(Bookings[0].createdAt).toLocaleString().substr(0, 10)}
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}> Total Amount:</span>{" "}
                {Bookings[0].orderamount}
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}> Booked Tests:</span>{" "}
                {Bookings[0].bookedtests.map((t) => {
                  return (
                    <p>
                      {t.name} &nbsp; &nbsp; &nbsp; {t.price}
                    </p>
                  );
                })}
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}> Contact Details:</span>{" "}
                {Bookings[0].contactnumber}
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}> Email:</span>{" "}
                {Bookings[0].email.length > 0 ? (
                  <>{Bookings[0].email}</>
                ) : (
                  <>-</>
                )}
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}> Address:</span>{" "}
                {Bookings[0].shippingaddress.address1} &nbsp;{" "}
                {Bookings[0].shippingaddress.address2} ,{" "}
                {Bookings[0].shippingaddress.city} ,{" "}
                {Bookings[0].shippingaddress.pincode}
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}> Status:</span>{" "}
                {Bookings[0].isdelivered === "true" ? (
                  <span style={{ color: "green" }}>
                    Completed{" "}
                    <CheckCircle
                      style={{
                        verticalAlign: "-6px",
                        color: "green",
                      }}
                    />
                  </span>
                ) : Bookings[0].isdelivered === "false" ? (
                  <span style={{ color: "#800000" }}>
                    In-Process{" "}
                    <PendingActions
                      style={{
                        verticalAlign: "-6px",
                        color: "#800000",
                      }}
                    />
                  </span>
                ) : (
                  <span style={{ color: "#800000" }}>
                    Cancelled{" "}
                    <CancelIcon
                      style={{
                        verticalAlign: "-6px",
                        color: "#800000",
                      }}
                    />
                  </span>
                )}
              </p>
            </section>
            <hr style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }} />
            <section
              style={{
                textAlign: "left",
                marginLeft: "10%",
                marginRight: "auto",
              }}
              className="grid-1"
            >
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Sample Collected By:
                </span>{" "}
                {Bookings[0].collectedby}
              </p>

              {Bookings[0].isdelivered === "true" ? (
                <a href={`${Bookings[0].reporturl}`} target='_blank' download >
                  <Button
                    variant="outlined"
                    style={{ width: "80%", margin: "2%" }}
                  >
                    View Report
                  </Button>
                </a>
              ) : null}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDescription;
