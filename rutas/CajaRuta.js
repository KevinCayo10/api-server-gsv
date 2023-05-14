const express = require("express");
const cajaRuta = express.Router();
const cajaControlador = require("../controladores/cajaControlador");

//Crear -> post
cajaRuta.post("/", cajaControlador.crearCaja);
//Obtener clientes -> get
cajaRuta.get("/", cajaControlador.obtenerCajas);
module.exports = cajaRuta;
