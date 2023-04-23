import React, { Suspense } from "react";
import { Carousel } from "react-carousel-minimal";
import ContactDetails from "../components/contact";
import "./home.css";
import are from "../Images/are.png";
import sayd from "../Images/sayd.png";
import yboe from "../Images/yboe.png";
import GetTestsByDiagnostics from "./Diagnostics";
import ComboTests from "./ComboTest";
import MedicalTests from "./MedicalTests";
import MedicalTestsHomeScreen from "./MedicalHomeScreenTest";
import TrackBooking from "../components/TrackBooking";
import { ThreeBoxSkeleton } from "../components/BundleLoading";

const HomeScreen = () => {
  const data = [
    {
      image: are,
      caption: " ",
    },
    {
      image: sayd,
      caption: " ",
    },
    {
      image: yboe,
      caption: " ",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div>
      <Carousel
        data={data}
        time={3500}
        width="850px"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="white"
        slideImageFit="cover"
        thumbnails={false}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
      <br />
      <br />

      <div className="grid-2">
        <h2 className="sub-heading" style={{ paddingLeft: "5%" }}>
          Top Diagnostic Tests
        </h2>
        <h3 style={{ paddingLeft: "15%" }}>
          <a
            href="/alltests"
            style={{ textDecoration: "none", color: "#1560bd" }}
          >
            View All
          </a>
        </h3>
      </div>
      <Suspense fallback={<ThreeBoxSkeleton />}>
        <GetTestsByDiagnostics />
      </Suspense>
      <div className="grid-2">
        <h2 className="sub-heading" style={{ paddingLeft: "5%" }}>
          Checkup Packages
        </h2>
        <h3 style={{ paddingLeft: "15%" }}>
          <a
            href="/allcombos"
            style={{ textDecoration: "none", color: "#1560bd" }}
          >
            View All
          </a>
        </h3>
      </div>
      <ComboTests />

      <ContactDetails />

      <div className="grid-2">
        <h2 className="sub-heading" style={{ paddingLeft: "5%" }}>
          Medical Tests
        </h2>
        <h3 style={{ paddingLeft: "15%" }}>
          <a
            href="/medicaltest"
            style={{ textDecoration: "none", color: "#1560bd" }}
          >
            View All
          </a>
        </h3>
      </div>
      <div
        style={{
          backgroundColor: "#E8E8E8",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        id="medical-test"
      >
        <MedicalTestsHomeScreen />
      </div>

      <br />
      <br />
      <br />
      <TrackBooking />
      <h2 className="sub-heading">About Us</h2>
    </div>
  );
};

export default HomeScreen;
