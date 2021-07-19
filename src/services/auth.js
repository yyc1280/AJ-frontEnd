import axios from "axios"

export const authCheck = () => {
  return axios.get(process.env.REACT_APP_API_URL + "/auth/login/success", {
    withCredentials: true,
  })
}

export const logout = () => {
  return axios.get(process.env.REACT_APP_API_URL + "/auth/logout", {
    withCredentials: true,
  })
}
