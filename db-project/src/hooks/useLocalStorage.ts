const useLocalStorage = (token: string, type: string) => {
  switch (type) {
    case "SET":
      return localStorage.setItem("token", JSON.stringify(token) as string);
    case "GET":
      return JSON.parse(localStorage.getItem("token") as string);
    case "REMOVE":
      return localStorage.removeItem("token");
    default:
      throw new Error("error!");
  }
};

export default useLocalStorage;
