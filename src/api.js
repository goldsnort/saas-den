const baseURL =
  process.env.NODE_ENV === "production" ? "/api/v1" : "http://localhost:3001";

export { baseURL };
