import { Response, Request } from "express";

class Matematica {
    somar(req: Request, res: Response) {
        const {x, y} = req.body;
        const r = x + y;
        return res.json({r});
    }

    subtrair(req: Request, res: Response) {
        const {x, y} = req.body;
        const r = x - y;
        return res.json({r});
    }
};

export default new Matematica();