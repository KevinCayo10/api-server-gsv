const mongoose = require("mongoose");
const cajaSchema = mongoose.Schema({
  cliente: {
    type: String,
    require: true,
  },
  vendedor: {
    type: String,
    require: true,
  },
  total: {
    type: Number,
    require: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("caja", cajaSchema);
