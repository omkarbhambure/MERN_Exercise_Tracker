import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button
} from "@material-ui/core";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: []
    };
    this.deleteExercise = this.deleteExercise.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then(res => {
        this.setState({
          exercises: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteExercise = id => {
    //console.log(id);
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then(res => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter(ele => ele._id !== id)
    });
  };

  render() {
    return (
      <React.Fragment>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.exercises.map(exercise => {
              return (
                <TableRow>
                  <TableCell>{exercise.username}</TableCell>
                  <TableCell>{exercise.description}</TableCell>
                  <TableCell>{exercise.duration}</TableCell>
                  <TableCell>{exercise.date.substring(0, 10)}</TableCell>
                  <TableCell>
                    <Link
                      to={"/edit/" + exercise._id}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        style={{ margin: "10px" }}
                      >
                        Edit
                      </Button>
                    </Link>
                    <Button onClick={() => this.deleteExercise(exercise._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}
