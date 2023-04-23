const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require,
      trim: true,
    },
    lname: {
      type: String,
      require,
      trim: true,
    },
    email: {
      type: String,
      require,
      trim: true,
    },
    contactnumber: {
      type: Number,
      require,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeModel = mongoose.model("EmployeeModel", EmployeeSchema);

module.exports = EmployeeModel;
