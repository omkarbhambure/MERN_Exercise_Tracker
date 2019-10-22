import React, { Component } from "react";
import {
  FormControl,
  Select,
  Typography,
  MenuItem,
  InputLabel,
  Divider,
  TextField,
  Button
} from "@material-ui/core";
//shitty way to handle date
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    this.setState({
      users: ["tester1"],
      username: "test user"
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeDate = date => {
    this.setState({
      date: date
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };

    console.log(exercise);

    window.location = "/";
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6">Create Exercise</Typography>
        <Divider style={{ margin: "20px 0px" }} />
        <FormControl>
          <InputLabel>User</InputLabel>
          <Select
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          >
            {this.state.users.map(user => {
              return <MenuItem value={user}>{user}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <br />
        <br />
        <TextField
          name="description"
          value={this.state.description}
          onChange={this.onChange}
          label="Description"
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          name="duration"
          value={this.state.duration}
          onChange={this.onChange}
          label="Duration"
          margin="normal"
        />
        <br />
        <br />
        <InputLabel>Date</InputLabel>
        <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
        <br />
        <br />
        <Button
          variant="contained"
          style={{
            margin: "20px 0px",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color: "white"
          }}
          onClick={this.onSubmit}
        >
          Create
        </Button>
      </React.Fragment>
    );
  }
}
