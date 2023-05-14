const mongoose = require("mongoose");
const productoSchema = mongoose.Schema({
  producto: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  precio: {
    type: Number,
    require: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("producto", productoSchema);
