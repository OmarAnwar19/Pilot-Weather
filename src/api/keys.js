//note, usually I would hide this in a .env file, but since this is a take-home task,
//there is no real risk of the key being compromised.
const API_KEY = "ffccfbb9f2714c34937142812220109";

const baseURL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=14`;

export default baseURL;
