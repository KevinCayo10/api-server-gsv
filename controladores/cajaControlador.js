const Caja = require("../modelos/cajaModelo");
exports.crearCaja = async (req, res) => {
  try {
    let caja;
    caja = new Caja(req.body);
    await caja.save();
    res.send(caja);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro de caja");
  }
};

exports.obtenerCajas = async (req, res) => {
  try {
    const cajas = await Caja.find();
    res.json(cajas);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los cajas");
  }
};
