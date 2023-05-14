const express = require("express");
const clienteRuta = express.Router();
const clienteControlador = require("../controladores/clienteControlador");

// api/clientes

//Crear -> post
clienteRuta.post("/", clienteControlador.crearCliente);
//Obtener clientes -> get
clienteRuta.get("/", clienteControlador.obtenerClientes);
//Actualizar cliente -> put
clienteRuta.put("/:id", clienteControlador.actualizarCliente);
//Obtener un cliente -> get
clienteRuta.get("/:id", clienteControlador.obtenerCliente);
//eliminar cliente-> delete
clienteRuta.delete("/:id", clienteControlador.eliminarCliente);

module.exports = clienteRuta;
