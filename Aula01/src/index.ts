import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import router from "./routes";

dotenv.config();

const app = express();
app.use(express.json());


app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(router);

// app.get('/texto/:nome/:indice', (req: Request, res: Response) => {
//     const { nome, indice } = req.params;
//     let num: number = parseInt(indice);

//     res.json(`letra: ${nome.slice( 0 , num )}`);
// });
