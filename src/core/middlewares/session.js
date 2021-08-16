import AsyncStorage from "@react-native-async-storage/async-storage";

const localStorageKey = "tokenSession";

class Session {
  constructor({ token = null } = {}) {
    this._token = token;
  }

  async setToken(token) {
    this._token = token;
    return await AsyncStorage.setItem(localStorageKey, token);
  }

  async getToken() {
    if (this._token) {
      return this._token;
    }

    return await AsyncStorage.getItem(localStorageKey);
  }

  async clearToken() {
    this._token = null;
    return await AsyncStorage.removeItem(localStorageKey);
  }
}

export default new Session();
