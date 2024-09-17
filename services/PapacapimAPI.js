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
  static async updateUser(user) {}

  static async deleteUser() {}

  /**
   *
   * @param {string} userLogin
   */
  static async findUserByLogin(userLogin) {}

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
