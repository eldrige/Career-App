import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, 'abc123', {
    expiresIn: '30d',
  });
};

export default generateToken;

// if we head to jwt.io, we realize that we have a 'iat' meaning issuedAt
