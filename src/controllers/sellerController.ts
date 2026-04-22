import { Request, Response } from "express";

export function sellerRender(req: Request, res: Response){
    res.render('seller-dashboard');
}
