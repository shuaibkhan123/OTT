import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
//import useFetch from "../../hooks/useFetch";
//import {useEffect, useState} from "react";
//import axios from "axios";
import requests from "../../request";

const Home = ({type}) => {
//const [lists,setLists] = useState([]);
//const [genre,setGenre] = useState(null);
/*useEffect(()=>{
    const getRandomLists = async ()=>{
      try{
        const response = await axios.get(
          `lists${type ? "?type=" + type:""}${genre ? "&genre=" + genre:""}`,{
            headers:{
              token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODBjNjBhNDc1NmMzYTNlYzA5YzJhYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTI2MjU3MzF9.XU_vdbPvJx5nb6vjXiJ5qqsEQuGKXIdWhfMRTM-obfo"}}
        );
        console.log(response.data);
        //setLists(res.data);
      }catch(err){
        console.error(err.response.data);
      }
    };
    getRandomLists();
  },[type, genre]);
*/
  //const {data,loading,error,reFetch} = useFetch("")







  return (
    <div className="home">
      <Navbar/>
      <Featured type={type}/>
      <List title="Trending" fetchUrl={requests.fetchTrending}/>
      <List title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <List title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <List title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <List title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <List title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <List title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies}/>
      <List title="Documentaries" fetchUrl={requests.fetchDocumetaries}/>
  
    </div>
  );
};
export default Home;