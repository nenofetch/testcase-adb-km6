import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";

const extraJwt = ExtractJwt;
const strategyJwt = Strategy;

passport.use(
  new strategyJwt({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  },
  function (jwtPayloads, done) {
    
  })
);
