const express = require("express");
const router = express.Router();

const Booking = require("../models/bookings");

router.post("/makebooking", (req, res) => {
  const { CartItem, details } = req.body;

  const book = new Booking({
    name: req.body.details.name,
    lname: req.body.details.lname,
    email: details.email,
    contactnumber: details.contactnumber,
    collectedby: "",
    bookedtests: CartItem,
    orderamount: details.orderamount,
    date: details.date,
    time: details.time,
    shippingaddress: {
      address1: details.address1,
      address2: details.address2,
      pincode: details.pincode,
      city: details.city,
    },
    isdelivered: "false",
    isSampleCollected: false,
    reporturl: "",
    gender: details.gender,
    age: details.age,
    status: false,
  });

  book.save((err) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send({ message: "Order Placed Successfully Successful" });
    }
  });
});

router.post("/bookingsbycontact", (req, res) => {
  Booking.find({ contactnumber: req.body.contactnumber }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.post("/bookingsbyid", (req, res) => {
  Booking.find({ _id: req.body.id }, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      res.send(docs);
    }
  });
});

router.get("/allbookings", (req, res) => {
  Booking.find({}, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      console.log("sending all bookings");
      res.send(docs);
    }
  });
});

router.post("/addreport", (req, res) => {
console.log('report time')
  const {reportdata} =  req.body
  Booking.findByIdAndUpdate(
    { _id: reportdata.id },
    {
      reporturl: reportdata.reporturl,
      isdelivered: "true",
      isSampleCollected: true,
      status:true
    },
    (err, docs) => {
      if (err) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
console.log('uploading....', reportdata.reporturl)
        res.send(docs);
      }
    }
  );
});

module.exports = router;
