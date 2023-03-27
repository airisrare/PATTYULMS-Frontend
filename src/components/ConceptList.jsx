import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ConceptService from "../service/ConceptService";

function ConceptList() {
  //getter and setter -> [] current state on start up is empty
  const [concepts, setConcepts] = useState([]);
  console.log(concepts);

  //runs when component renders -> we can add a dependency array for changes
  //res is actual data coming from api
  //res.data
  useEffect(() => {
    // httpCommon.get('/concepts/gallery').then(res => setConcepts(res.data)).catch(error => console.log(error));
    ConceptService.getAll()
      .then((res) => setConcepts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="text-center">
      <h2>Concepts</h2>
      <p>
        Concepts are just ideas, renders and faux clothing for anyone to look at
      </p>
      {
        //concept - individual array
        concepts.map((concept) => {
          return (
            <Card key={concept.title}>
              <Card.Img
                variant="top"
                src={concept.imageURL}
                style={{ width: "50rem", height: "60rem" }}
              />
              <Card.Body>
                <Card.Title>Title: {concept.title}</Card.Title>
                <Card.Text>Description: {concept.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })
      }
    </div>
  );
}

export default ConceptList;
