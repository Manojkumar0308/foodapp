import { useEffect, useState } from "react";
import styles from "./search.module.css";
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
const api_key = "12bcb51001384ae898f030c31b330eda";
export default function SearchComponents({ setFoodData }) {
  const [query, setQuery] = useState("pizza");

  //syntax of the useEffect Hook...
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${BASE_URL}?query=${query}&apiKey=${api_key}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    //to execute above function we have to call this function..
    fetchFood();
    //to execute fun while typing we have to mpass state in the dependency array or List.
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
