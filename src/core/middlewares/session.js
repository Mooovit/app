const localStorageKey = "tokenSession";

class Session {
  constructor({ token = null } = {}) {
    this._token = token;
  }

  setToken(token) {
    this._token = token;
    window.localStorage.setItem(localStorageKey, token);
  }

  getToken() {
    if (this._token) {
      return this._token;
    }

    return window.localStorage.getItem(localStorageKey);
  }

  clearToken() {
    this._token = null;
    window.localStorage.removeItem(localStorageKey);
  }
}

export default new Session();
