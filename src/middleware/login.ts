import { verify } from 'jsonwebtoken';

// module.exports <-- js version
const login = (req:any, res:any, next:any) => {
    try {
        const decode = verify(req.headers.authorization, process.env.SECRET as string);
        req.user = decode;
        next();
    } catch(error){
        return res.status(401).json({message: 'Not Authenticated'});
    }
}

export { login };