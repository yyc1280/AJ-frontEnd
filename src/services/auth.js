import axios from "axios"
axios.defaults.withCredentials = true

export const authCheck = () => {
  return axios.get(process.env.REACT_APP_API_URL + "/auth/login/success", {
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  })
}

export const logout = () => {
  return axios.get(process.env.REACT_APP_API_URL + "/auth/logout", {
    withCredentials: true,
  })
}
