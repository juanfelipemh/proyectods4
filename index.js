import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import ProductoRouter from './routes/productoRouter.js';
import bodyParser from 'body-parser';
import cors from 'cors'


// Configuración a variables de entorno
dotenv.config();


//Conexión con BD
mongoose.connect(process.env.MONGO).then( ()=>{
    console.log("Conectado a la base de datos");
}).catch((error) => {
    console.log(error.message);
})

const app = express();

// Middlewares
app.use(cors()) // Convierte la URL en una instrucción valida para axios

app.use(express.json()) // Convertir String en objeto literal JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Routes
// Creamos la ruta para los productos en la aplicación
app.use("/api/productos/", ProductoRouter);


// Conexión al puerto servidor
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Conectado al puerto ${PORT}`);
    
})