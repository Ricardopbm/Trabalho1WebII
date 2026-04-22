import {Response, Request} from 'express';

export function customerRender(req: Request, res: Response){
    res.render('index');
}
