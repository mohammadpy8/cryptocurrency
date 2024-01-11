interface infoType {
  full_name: string;
  password: string;
  username: string;
  is_staff: string;
}

const useSaveInfoLocalStorage = (info: infoType | string, type: string) => {
  switch (type) {
    case "SET":
      return localStorage.setItem("userInfo", JSON.stringify(info));
    case "GET":
      return JSON.parse(localStorage.getItem("userInfo") as string);
    case "REMOVE":
      return localStorage.removeItem("userInfo");
    default:
      throw new Error("error!");
  }
};

export default useSaveInfoLocalStorage;
