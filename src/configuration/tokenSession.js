const localStorageKey = "tokenSession";
export const tokenSession = () => {};

tokenSession.setToken = (token) => localStorage.setItem(localStorageKey, token)
tokenSession.getToken = () => localStorage.getItem(localStorageKey)
tokenSession.clearToken = () => localStorage.removeItem(localStorageKey)
