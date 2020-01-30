const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/enquire", { useNewUrlParser: true, useUnifiedTopology: true });

const Enquire = mongoose.model("enquire", {
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  comment:{
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
  }

})

exports.Enquire = Enquire;