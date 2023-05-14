const Cliente = require("../modelos/clienteModelo");

//Crear cliente
exports.crearCliente = async (req, res) => {
  try {
    let cliente;
    cliente = new Cliente(req.body);
    await cliente.save();
    res.send(cliente);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro del cliente");
  }
};

//Obtener clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los clientes");
  }
};

//Actualizar cliente
exports.actualizarCliente = async (req, res) => {
  try {
    const { nombresCompletos, correoElectronico, direccion, celular } =
      req.body;
    let cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({ msg: "No existe el Cliente" });
    }

    cliente.nombresCompletos = nombresCompletos;
    cliente.correoElectronico = correoElectronico;
    cliente.direccion = direccion;
    cliente.celular = celular;

    cliente = await Cliente.findOneAndUpdate({ _id: req.params.id }, cliente, {
      new: true,
    });

    res.json(cliente);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al actualizar el cliente");
  }
};

//Obtener cliente
exports.obtenerCliente = async (req, res) => {
  try {
    let cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({ msg: "No existe el Cliente" });
    }
    res.json(cliente);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar el cliente");
  }
};

//Eliminar cliente
exports.eliminarCliente = async (req, res) => {
  try {
    let cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({ msg: "No existe el Cliente" });
    }
    await Cliente.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Cliente Eliminado" });
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al eliminar el cliente");
  }
};
