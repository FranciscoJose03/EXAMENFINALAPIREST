import {Request, Response} from "npm:express@4.18.2";

export const holamundo = (_req: Request, res: Response) => {
    res.status(200).send("Hola Mundo!");
}