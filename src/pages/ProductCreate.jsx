import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../pages/page.css";
import { useState } from "react";
import ProductService from "../service/ProductService";

function ProductCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [styleID, setStyleID] = useState("");
  const [file, setMainImage] = useState("");
  const [additionalFiles, setAdditionalFiles] = useState("");
  const [version, setVersion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("gender", gender);
    formData.append("size", size);
    formData.append("styleID", styleID);
    formData.append("file", file);
    formData.append("additionalFiles", additionalFiles);
    formData.append("version", version);
    console.log(formData);

    ProductService.postProduct(formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <Card className="cardstyle">
      <Card.Header>Product Create</Card.Header>
      <Card.Body>
        <Form
          onSubmit={handleSubmit}
          action="Home.jsx"
          encType="multipart/form-data"
        >
          <Form.Group>
            <Form.Label className="formLabel">Title</Form.Label>
            <Form.Control
              type="title"
              placeholder="Title"
              // className="forminputsmall"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Price</Form.Label>
            <Form.Control
              type="price"
              placeholder="Price USD"
              // className="forminputsmall"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {/* <Form.Text className="text-muted">
          Any further comments?
        </Form.Text> */}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Gender</Form.Label>
            <Form.Control
              type="gender"
              placeholder="Gender"
              // className="forminputsmall"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Size</Form.Label>
            <Form.Control
              type="size"
              placeholder="Size"
              // className="forminputsmall"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Style-ID</Form.Label>
            <Form.Control
              type="styleID"
              placeholder="StyleID"
              // className="forminputsmall"
              value={styleID}
              onChange={(e) => setStyleID(e.target.value)}
            />
            <Form.Text className="text-muted">
              This is how we organize our images, Please start with &emsp;
              Concept-"CONCEPTNAME"
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Description</Form.Label>
            <Form.Control
              type="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Text className="text-muted">Any further comments?</Form.Text>
          </Form.Group>

          <br />
          <Form.Group>
            <Form.Label className="formLabel">Main Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="MainImage"
              onChange={(e) => setMainImage(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Additional Images</Form.Label>
            <Form.Control
              type="file"
              placeholder="AdditionalImages"
              onChange={(e) => setAdditionalFiles(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Version</Form.Label>
            <Form.Control
              type="version"
              placeholder="Version"
              className="forminputsmall"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button className="btncolor" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ProductCreate;
