export default class HTTP {
    static async request({ URL, method, body = {}, authToken = null }) {
        const response = await fetch(URL, {
            method,
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'x-session-token': authToken,
            },
            body: JSON.stringify(body)
        });
        const json = await response.json();

        return {
            response: json,
            statusCode: response.status,
        };
    }
}