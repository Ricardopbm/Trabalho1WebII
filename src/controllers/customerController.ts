import {Response, Request} from 'express';

export function customerIndex(req: Request, res: Response){
    res.render('customerIndex');
}


export function customerRender(req: Request, res: Response){
    res.render('categories');
}

export function cart(req: Request, res: Response){
    res.render('cart');
}

export function orders(req: Request, res: Response){
    res.render('orders');
}

export function details(req: Request, res: Response){
    res.render('product-details');
}