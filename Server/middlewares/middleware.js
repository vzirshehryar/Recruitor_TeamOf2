import jwt from "jsonwebtoken";

const companySecretKey = process.env.companySecretKey;

export const verifyJWT = (req, res, next) => {
    //   console.log("I am in middle ware");

    const secretKey = process.env.JWToken;
    const token = req.headers["authorization"];

    //   console.log(token);
    //   console.log(secretKey);

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ error: "Invalid token" });
        }

        // console.log(user.user.id);
        req.user = user.user.id; // Store the user ID in req.user
        next();
    });
};

export const generateCompanyToken = (id) => {
    const token = jwt.sign({ id }, companySecretKey, { expiresIn: "5 days" });
    return token;
};

export const verifyCompanyToken = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, companySecretKey, (err, result) => {
        if (err) {
            return res.status(403).json({ error: "Invalid token" });
        }
        req.company = result.id; // Store the user ID in req.user
        next();
    });
};
