import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { jobsResults } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.results.jobs);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(jobsResults(query));
    jobsResults();
  };

  return (
    <Container>
      <Button
        variant="warning"
        className="position-fixed favoriteButton"
        style={{ zIndex: "2" }}
        onClick={() => {
          navigate("/favorites");
        }}
      >
        Vai a preferiti
      </Button>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs && jobs.map(jobData => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
