import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8090/api/",
});

async function setLocation(location) {
  const { lat, lng } = location;

  try {
    const response = await api.post("set-location", { lat: +lat, lng: +lng });
    return response.data.message;
  } catch (error) {
    return error.response.data.message;
  }
}

async function checkDistance(location) {
  const { lat, lng } = location;

  try {
    const response = await api.post("check-distance", { lat: +lat, lng: +lng });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export { setLocation, checkDistance };

