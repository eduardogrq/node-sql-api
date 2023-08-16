import express from "express";

const app = express();

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

