import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
app.use(express.json());
// Main route
app.use('/ping', indexRoutes)
// getting employees routes
app.use('/employees', employeesRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

