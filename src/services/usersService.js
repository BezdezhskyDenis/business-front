import httpService from "./httpService";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

refreshTokenHeader();

export function refreshTokenHeader() {
  httpService.setCommonHeader("x-auth-token", getJWT());
}

export async function createUser(user) {
  const response = await httpService.post("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users", user);
  return response;
}

export async function login(credentials) {
  const response = await httpService.post("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login", credentials);
  localStorage.setItem(TOKEN_KEY, response.data, response);
  refreshTokenHeader();
  return response;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  refreshTokenHeader();
}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

const usersService = {
  createUser,
  login,
  logout,
  getUser,
  getJWT,
};

export default usersService;
