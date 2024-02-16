import User from "../models/user.js";
import jwt from 'jsonwebtoken';

import { secretKey } from "../config/serverConfig.js";
export const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      secretKey,
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          let user = await User.findById(decodedToken.id);
          if (user) {
             req.user = user;
            //  res.json({ status: true, user: user.id })
          }
          else {
            return res.json({ status: false }); 
          } 
          
          next();
        }
      }
    );
  } else {
     return  res.json({ status: false });
   
  }
};