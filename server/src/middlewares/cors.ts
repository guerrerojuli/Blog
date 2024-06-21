import { Request, Response, NextFunction} from "express"

export function cors(req: Request, res: Response, next: NextFunction) {
   res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
 };
