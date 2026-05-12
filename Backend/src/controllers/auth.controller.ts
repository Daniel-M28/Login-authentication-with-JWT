import type  {Request, Response} from 'express';

export const login = (req: Request, res: Response) => {
    console.log(req.body);

    return res.json({message: 'Login successful'});
}



export const register = (req: Request, res: Response) => {
console.log(req.body);
    return res.json({message: 'Register successful'});
}