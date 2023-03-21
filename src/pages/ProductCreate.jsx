import React from "react";
import {Card, Form, Button} from 'react-bootstrap'
import '../pages/page.css';

class ProductCreate extends React.Component {
  render() {
    return (
<Card className="cardstyle">
        <Card.Header>Product Create</Card.Header>
        <Card.Body>
          <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="title" placeholder="Title" className="forminputsmall"/>
        {/* <Form.Text className="text-muted">
          What will we call this Piece?
        </Form.Text> */}
        </Form.Group>
        <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control type="price" placeholder="Price USD" className="forminputsmall"  />
        {/* <Form.Text className="text-muted">
          Any further comments?
        </Form.Text> */}
      </Form.Group>
       
      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Control type="gender" placeholder="Gender" className="forminputsmall" />
        </Form.Group>
        <Form.Group>
        <Form.Label>Size</Form.Label>
        <Form.Control type="size" placeholder="Size" className="forminputsmall" />
        </Form.Group>
      <Form.Group>
        <Form.Label>Style-ID</Form.Label>
        <Form.Control type="styleID" placeholder="StyleID" className="forminputsmall" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type="description" placeholder="Description"/>
        <Form.Text className="text-muted">
          Any further comments?
        </Form.Text>
      </Form.Group>
      <Form.Group>
      <Form.Text className="text-muted">
          This is how we organize our images, Please start with &emsp; Concept-"CONCEPTNAME"
        </Form.Text>
        </Form.Group>
        <br/>
      <Form.Group>
        <Form.Label>Main Image</Form.Label>
        <Form.Control type="file" placeholder="MainImage" />
      </Form.Group> 
      <Form.Group>
        <Form.Label>Additional Images</Form.Label>
        <Form.Control type="file" placeholder="AdditionalImages" />
      </Form.Group>
      <Form.Group> 
        <Form.Label>Version</Form.Label>
        <Form.Control type="version" placeholder="Version" className="forminputsmall" />
      </Form.Group>
      <br/>
      <Button className="btncolor" type="submit">
        Submit
      </Button>
      
    </Form>
        </Card.Body>
</Card>
    );
  }
}

export default ProductCreate;
