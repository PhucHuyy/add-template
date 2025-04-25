// import axiosPublic from "../../api/axiosPublic";
// import axiosPrivate from "../../api/axiosPrivate";

// export const authService = {
//   login: async (email: string, password: string) => {
//     const response = await axiosPublic.post("/auth/login", { email, password });
//     return response.data;
//   },

//   logout: async () => {
//     const response = await axiosPrivate.post("/auth/logout", null, {
//       withCredentials: true
//     });
//     localStorage.removeItem("accessToken");
//     return response.data;
//   },
  

//   getProfile: async () => {
//     const response = await axiosPrivate.get("/users/my-info");
//     return response.data;
//   },

//   register: async (username: string, email: string, password: string) => {
//     const response = await axiosPublic.post("/auth/register", {
//       username,
//       email,
//       password,
//     });
//     return response.data;
//   }
  
// };
