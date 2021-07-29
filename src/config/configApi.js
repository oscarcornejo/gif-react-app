import axios from "axios";

const gifApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: "Ii4G7TeTlLIx8f8fLOK8HKMdwflwMbUK",
  },
});

export default gifApi;
