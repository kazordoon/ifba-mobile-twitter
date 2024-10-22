import AsyncStorage from '@react-native-async-storage/async-storage';
import getFilledObjectFields from '../utils/getFilledObjectFields';
import HTTP from '../utils/HTTP';

const API_BASE_URL = 'https://api.papacapim.just.pro.br/';

export default class PapacapimAPI {
  /**
   *
   * @param {{ login: string, name: string, password: string, password_confirmation: string }} user
   */
  static async registerUser(user) {
    const { statusCode } = await HTTP.request({
      URL: `${API_BASE_URL}users`,
      method: 'POST',
      body: { user }
    });
    return statusCode;
  }

  /**
   *
   * @param {string} login
   * @param {string} password
   */
  static async authUser(login, password) {
    const { response } = await HTTP.request({
      URL: `${API_BASE_URL}sessions`,
      method: 'POST',
      body: { login, password }
    });
    return response.token;
  }

  static async logout() {}

  /**
   *
   * @param {{ login?: string, name?: string, password?: string, password_confirmation?: string }} user
   */
  static async updateUser(user) {
    const authToken = await AsyncStorage.getItem('token');
    const body = { user: { ...getFilledObjectFields(user) } };

    const { statusCode } = await HTTP.request({
      URL: `${API_BASE_URL}users/1`,
      method: 'PATCH',
      body,
      authToken
    });
    return statusCode;
  }

  static async deleteUser() {
    const authToken = await AsyncStorage.getItem('token');

    const { statusCode } = await HTTP.request({
      URL: `${API_BASE_URL}users/1`,
      method: 'DELETE',
      authToken
    });
    return statusCode;
  }

  /**
   *
   * @param {string} userLogin
   */
  static async findUserByLogin(userLogin) {
    const authToken = await AsyncStorage.getItem('token');

    const { response: user } = await HTTP.request({
      URL: `${API_BASE_URL}users/${userLogin}`,
      method: 'GET',
      authToken
    });
    return user;
  }

  /**
   *
   * @param {string} searchParam
   */
  static async findUsers(searchParam) {
    const authToken = await AsyncStorage.getItem('token');

    const { response: foundUsers } = await HTTP.request({
      URL: `${API_BASE_URL}users/?search=${searchParam}`,
      method: 'GET',
      authToken
    });
    return foundUsers;
  }

  /**
   *
   * @param {string} userLogin
   */
  static async followUser(userLogin) {
    const authToken = await AsyncStorage.getItem('token');

    const { statusCode } = await HTTP.request({
      URL: `${API_BASE_URL}users/${userLogin}/followers`,
      method: 'POST',
      authToken
    });
    return statusCode;
  }

  /**
   *
   * @param {string} userLogin
   */
  static async unfollowUser(userLogin) {
    const authToken = await AsyncStorage.getItem('token');

    const { statusCode } = await HTTP.request({
      URL: `${API_BASE_URL}users/${userLogin}/followers/1`,
      method: 'DELETE',
      authToken
    });
    return statusCode;
  }

  /**
   *
   * @param {string} userLogin
   */
  static async getUserFollowers(userLogin) {
    const authToken = await AsyncStorage.getItem('token');
    const { response: userFollowers } = await HTTP.request({
      URL: `${API_BASE_URL}users/${userLogin}/followers`,
      method: 'GET',
      authToken
    });
    return userFollowers;
  }

  /**
   * @param {string} userLogin
   */
  static async isFollowingUser(userLogin) {
    const ownUsername = await AsyncStorage.getItem('username');
    const followers = await PapacapimAPI.getUserFollowers(userLogin);
    return followers.some(
      (follower) => follower.follower_login?.toLowerCase() === ownUsername
    );
  }

  /**
   *
   * @param {number} pageNumber
   */
  static async getPosts(pageNumber = 1) {
    const authToken = await AsyncStorage.getItem('token');
    const { response: posts } = await HTTP.request({
      URL: `${API_BASE_URL}posts?page=${pageNumber}`,
      method: 'GET',
      authToken
    });
    return posts;
  }

  /**
   *
   * @param {number} postID
   */
  static async getPostByID(postID) {
    const authToken = await AsyncStorage.getItem('token');
    const { response: post } = await HTTP.request({
      URL: `${API_BASE_URL}posts/${postID}`,
      method: 'GET',
      authToken
    });
    return post;
  }

    /**
   *
   * @param {string} userLogin
   * @param {number} pageNumber
   */
    static async getPostsFromUser(userLogin, pageNumber = 1) {
      const authToken = await AsyncStorage.getItem('token');
  
      const { response: userPosts } = await HTTP.request({
        URL: `${API_BASE_URL}users/${userLogin}/posts?page=${pageNumber}`,
        method: 'GET',
        authToken
      });
      return userPosts;
    }

  /**
   *
   * @param {string} message
   */
  static async createPost(message) {
    const authToken = await AsyncStorage.getItem('token');
    const { statusCode } = await HTTP.request({
      URL: `${API_BASE_URL}posts`,
      method: 'POST',
      body: { post: { message } },
      authToken
    });
    return statusCode;
  }

    /**
   *
   * @param {string} postID
   */
    static async deletePost(postID) {
      const authToken = await AsyncStorage.getItem('token');
      const { statusCode } = await HTTP.request({
        URL: `${API_BASE_URL}posts/${postID}`,
        method: 'DELETE',
        authToken
      });
      return statusCode;
    }

  /**
   *
   * @param {number} postID
   */
  static async likePost(postID) {
    const authToken = await AsyncStorage.getItem('token');
    const { statusCode } = await HTTP.request({
      URL: `${API_BASE_URL}posts/${postID}/likes`,
      method: 'POST',
      authToken
    });
    return statusCode;
  }

  /**
   *
   * @param {number} postID
   */
  static async dislikePost(postID) {
    const authToken = await AsyncStorage.getItem('token');
    const { statusCode } = await HTTP.request({
      URL: `${API_BASE_URL}posts/${postID}/likes/1`,
      method: 'DELETE',
      authToken
    });
    return statusCode;
  }

  /**
   *
   * @param {number} postID
   */
  static async getPostLikes(postID) {
    const authToken = await AsyncStorage.getItem('token');
    const { response: likes } = await HTTP.request({
      URL: `${API_BASE_URL}posts/${postID}/likes`,
      method: 'GET',
      authToken
    });
    return likes;
  }

  /**
   *
   * @param {number} postID
   */
  static async getPostReplies(postID) {
    const authToken = await AsyncStorage.getItem('token');
    const { response: replies } = await HTTP.request({
      URL: `${API_BASE_URL}posts/${postID}/replies`,
      method: 'GET',
      authToken
    });
    return replies;
  }

  /**
   *
   * @param {number} postID
   * @param {string} message
   */
  static async replyToPost(postID, message) {
    const authToken = await AsyncStorage.getItem('token');
    const { statusCode, response: replySent } = await HTTP.request({
      URL: `${API_BASE_URL}posts/${postID}/replies`,
      method: 'POST',
      authToken,
      body: { reply: { message } }
    });

    return { replySent, statusCode };
  }
}
