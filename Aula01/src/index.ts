import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
    res.send('Ola turminha da bagunca');
})

app.get('/user', (req: Request, res: Response) => {
    res.send('Henrique SPP');
})