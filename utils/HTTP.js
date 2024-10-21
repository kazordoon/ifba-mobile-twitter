export default class HTTP {
  static async request({ URL, method, body = {}, authToken = null }) {
    const filtered =
      Object.keys(body).length === 0 ? undefined : JSON.stringify(body);

    const response = await fetch(URL, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-session-token': authToken
      },
      body: filtered
    });

    const statusCode = response.status;
    if (statusCode === 204) {
      return { statusCode };
    }

    const json = await response.json();
    return {
      response: json,
      statusCode
    };
  }
}
