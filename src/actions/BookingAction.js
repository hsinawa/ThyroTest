import axios from "axios";

const Booking_Req = "PLACE_Booking_REQUEST";
const Booking_Suc = "PLACE_Booking_SUCCESS";
const Booking_Fail = "PLACE_ORDER_FAILED";

export const PlaceBookingAction =
  ({ details }) =>
  (dispatch, getState) => {
    const DemoItem = getState().CartReducer.CartItem;

    var CartItem = new Array();

    for (var i = 0; i < DemoItem.length; i++) {
      var item = {
        name: DemoItem[i].name,
        reporttime: DemoItem[i].reporttime,
        price: DemoItem[i].price,
        _id: DemoItem[i]._id,
        duration: DemoItem[i].duration,
      };
      CartItem.push(item);
    }

    dispatch({ type: `${Booking_Req}` });

    axios
      .post("/api/bookings/makebooking", { CartItem, details })
      .then((res) => {
        dispatch({ type: `${Booking_Suc}` });
        sessionStorage.setItem("Details", JSON.stringify(details));
        localStorage.removeItem("CartItem");
        window.location.href = "/confirm";
      })
      .catch((err) => {
        dispatch({ type: `${Booking_Fail}` });
      });
  };

const Bookings_Req = "Get_Bookings_Request";
const Booking_Success = "Get_Bookings_Success";
const Bookings_Fail = "Get_Bookings_Failed";

export const GetBookingsByPhoneNumberAction =
  ({ contactnumber }) =>
  (dispatch) => {
    dispatch({ type: Bookings_Req });

    axios
      .post("/api/bookings/bookingsbycontact", { contactnumber })
      .then((res) => {
        dispatch({ type: Booking_Success, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: Bookings_Fail, payload: err });
      });
  };

const Booking_Id_Req = "Get_Bookings_ById_Req";
const Booking_Id_Success = "Get_Bookings_ById_Success";
const Booking_Id_Fail = "Get_Bookings_ById_Fail";
export const GetBookingByIdAction =
  ({ id }) =>
  (dispatch) => {
    dispatch({ type: Booking_Id_Req });

    axios
      .post("/api/bookings/bookingsbyid", { id })
      .then((res) => {
        dispatch({ type: Booking_Id_Success, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: Booking_Id_Fail, payload: err });
      });
  };

const Get_All_BookingsReq = "Get_All_BookingsRed";
const Get_All_BookingsSuc = "Get_All_BookingsSuc";
const Get_All_BookingsFail = "Get_All_BookingsFail";

export const GetAllBookingsAction = () => (dispatch) => {
  dispatch({ type: Get_All_BookingsReq });
  axios
    .get("/api/bookings/allbookings")
    .then((res) => {
      dispatch({ type: Get_All_BookingsSuc, payload: res.data });
    })
    .catch((err) => {
      console.log(err);

      dispatch({ type: Get_All_BookingsFail, payload: err });
    });
};

const Report_Req = "Report_Req";
const Report_Suc = "Report_Suc";
const Report_Fail = "Report_Fail";
export const UploadReportAction =
  ({ reportdata }) =>
  (dispatch) => {
    dispatch({ type: Report_Req });
    axios
      .post("/api/bookings/addreport", { reportdata })
      .then((res) => {
        dispatch({ type: Report_Suc, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: Report_Fail, payload: err });
      });
  };
