import express from "express";
import {pool} from "./db.js";

const app = express();

app.get('/ping', async(req, res) => {
    const result = await pool.query("SELECT 1 + 1 AS solution");
    return res.json(result[0]);
})

app.get("/employees", (req, res) => {
    res.send("Obteniendo empleados");
});

app.post("/employees", (req, res) => {
    res.send("Creando empleado");
});

app.put("/employees/:id", (req, res) => {
    res.send("Actualizando empleado");
});

app.delete("/employees/:id", (req, res) => {
    res.send("Eliminando empleado");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

