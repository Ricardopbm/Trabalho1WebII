import { Request, Response, NextFunction } from 'express';

export function logMiddleware(req: Request, res: Response, next: NextFunction): void {
    const ip = req.ip;
    const method = req.method;
    const url = req.originalUrl;

    // Usando Date normal. toISOString() retorna algo como "2024-04-22T14:30:00.000Z"
    // Use localeString se preferir o formato brasileiro: new Date().toLocaleString('pt-BR')
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${ip} - ${method} ${url}`);

    const body = req.body;

    if (body && Object.keys(body).length > 0) {
        // Criamos uma cópia tipada para manipulação
        const bodyParaLogar: Record<string, any> = { ...body };

        // Máscara de segurança para senhas (regras de LGPD/Compliance)
        if (bodyParaLogar.password) {
            bodyParaLogar.password = '**';
        }

        console.log(' Payload:', JSON.stringify(bodyParaLogar));
    }

    // O evento 'finish' garante que o log de saída ocorra após o envio da resposta
    res.on('finish', () => {
        const statusCode = res.statusCode;
        console.log(`[${timestamp}] out: ${ip} - ${method} ${url} - status: ${statusCode}`);
    });

    next();
}

