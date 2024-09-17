import AsyncStorage from '@react-native-async-storage/async-storage';
import getFilledObjectFields from '../utils/getFilledObjectFields';

const API_BASE_URL = 'https://api.papacapim.just.pro.br/';

export default class PapacapimAPI {
  /**
   *
   * @param {{ login: string, name: string, password: string, password_confirmation: string }} user
   */
  static async registerUser(user) {
    const payload = { user };

    const response = await fetch(`${API_BASE_URL}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    return response.status;
  }

  /**
   *
   * @param {string} login
   * @param {string} password
   */
  static async authUser(login, password) {
    const payload = { login, password };

    let response = await fetch(`${API_BASE_URL}sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    response = await response.json();
    return response.token;
  }

  static async logout() {}

  /**
   *
   * @param {{ login?: string, name?: string, password?: string, password_confirmation?: string }} user
   */
  static async updateUser(user) {
    const token = await AsyncStorage.getItem('token');
    const payload = { user: { ...getFilledObjectFields(user) } };

    let response = await fetch(`${API_BASE_URL}users/1`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-session-token': token
      },
      body: JSON.stringify(payload)
    });

    return response.status;
  }

  static async deleteUser() {}

  /**
   *
   * @param {string} userLogin
   */
  static async findUserByLogin(userLogin) {
    const token = await AsyncStorage.getItem('token');

    const response = await fetch(`${API_BASE_URL}users/${userLogin}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-session-token': token
      }
    });

    const json = await response.json();
    return json;
  }

  static async findUsers() {}

  /**
   *
   * @param {string} userLogin
   */
  static async followUser(userLogin) {}

  /**
   *
   * @param {string} userLogin
   */
  static async unfollowUser(userLogin) {}

  /**
   *
   * @param {string} userLogin
   */
  static async getUserFollowers(userLogin) {}
}