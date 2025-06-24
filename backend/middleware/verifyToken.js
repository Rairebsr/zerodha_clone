import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log('Authorization Header:', req.headers['authorization']);


  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.userId = decoded.id;
    next();
  });
};
export default verifyToken;
