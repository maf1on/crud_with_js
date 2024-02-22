import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data , setData] = useState([])
  async function getApi() {
    try {
      const req = await axios.get(url);
      const res = req.data;
      setData(res);
    } catch (error) {}
  }
  useEffect(() => {
    getApi();
  }, [url]);
};
