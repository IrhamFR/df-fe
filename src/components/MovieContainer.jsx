import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from './MovieList'
// import {useState} from 'react'
// import dataMovies from '../dataDummy/DataFakeMovies';
// import { UserContext } from '../context/UserContext';
import { useQuery } from 'react-query';
import {API} from '../config/api'

function MovieContainer() {

  let { data: film } = useQuery('moviesCache', async () => {
    const response = await API.get('/films');
    console.log("response film", response)
    
    const resultResponse = response.data.data;

    const resultFilter = resultResponse.filter((e) => {
      if(e.category_id === 1) {
        return e.category_id === 1
      }
    })

    console.log(resultFilter)
    return resultFilter
  });

  console.log(film);

  return (
    <div >
      <Container className="my-5 overflow-hidden" id="" >
        <h3 className="text-light">Movies</h3>
        <Row>
          {film?.map((movies, index) => {
            return(
              <Col md={2} key={index}>
                  <MovieList 
                    id={movies.id}
                    movieImg={movies.thumbnail}
                    title={movies.title}
                    year={movies.year}
                  />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MovieContainer;
