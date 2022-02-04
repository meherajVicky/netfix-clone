import React from "react";
import request from "../../config/request";
import Banner from "../banner/Banner";
import Nav from "../nav/Nav";
import Row from "../row/Row";



import "./home-screen.css";

export default function homeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="netflix originals"
        fetchUrl={request.fetchForNetflixOriginals}
        isLarge={true} 
      />
      <Row title="Trending" fetchUrl={request.fetchForTrending} isLarge={false} />
      <Row title="Top Rated" fetchUrl={request.fetchForTopRated} isLarge={false} />
      <Row title="Action" fetchUrl={request.fetchForAction} isLarge={false} />
      <Row title="Comedey" fetchUrl={request.fetchForComedy} isLarge={false} />
      <Row title="Documentation" fetchUrl={request.fetchForDocument} isLarge={false} />
      <Row title="Horror" fetchUrl={request.fetchForHorror} isLarge={false} />
      <Row title="Romance" fetchUrl={request.fetchForRomance} isLarge={false} />
    </div>
  );
}
