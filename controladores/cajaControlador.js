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

exports.eliminarCaja = async (req, res) => {
  try {
    let caja = await Caja.findById(req.params.id);
    if (!caja) {
      res.status(404).json({ msg: "No existe el caja" });
    }
    await Caja.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Caja Eliminado" });
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al eliminar el Caja");
  }
};
