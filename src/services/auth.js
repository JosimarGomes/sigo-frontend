import jwt from 'jsonwebtoken';

const TOKEN_KEY = '@yTjy57Lj8E/UC9vpLBIv5cMXxWY1xj27ub/D6GavBOw=';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const decodeToken = token => jwt.decode(token);
