import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import requests from "../request";

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Rows title="ACTION MOVIES" fetchUrl={requests.fetchActionsMovies} />
      <Rows title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default Home;
