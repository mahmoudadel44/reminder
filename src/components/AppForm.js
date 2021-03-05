import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Paragraph,
  Reminder,
  DivPicker,
} from "../styled.js";
import "../customStyle.css";
import { connect } from "react-redux";
import {
  addRemainder,
  remove_Remainder,
  clear_Remainder,
} from "../actions/remainderAction";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./unnamed.png";
export class AppForm extends Component {
  state = {
    text: "",
    date: new Date(),
  };
  render_Remainders = () => {
    const { remainders = [] } = this.props;
    return remainders.map((remainder) => {
      return remainder.text === "" ? (
        <p style={{ color: "white" }}>!!! Please Enter What Do You Think</p>
      ) : (
        <Reminder>
          <div>{remainder.text}</div>
          <div>{moment(new Date(remainder.date)).fromNow()}</div>

          <div
            className="Icon"
            style={{
              cursor: "pointer",
              backgroundColor: "#dc3545",
              fontSize: "25px",
              width: "40px",
              height: "35px",
              borderRadius: "50%",
              color: "#fff",
              textAlign: "center",
              lineHeight: "20px",
              position: "absolute",
              marginLeft: "520px",
              marginTop: "7px",
              marginBottom: "5px",
              paddingTop: "7px",
            }}
            onClick={() => this.props.remove_Remainder(remainder.id)}
          >
            X
          </div>
        </Reminder>
      );
    });
  };
  render() {
    return (
      <Form className="form">
        <img
          src={logo}
          style={{ width: "25%", display: "block", margin: "10px" }}
        />
        <Paragraph>What Should You Do ?</Paragraph>

        <Input
          type="text"
          value={this.state.text}
          placeholder="Enter What Do You Think..."
          onChange={(e) => this.setState({ text: e.target.value })}
        ></Input>

        <DivPicker style={{ marginBottom: "4px" }}>
          <DatePicker
            className="border-0"
            style={{ border: "none", cursor: "pointer" }}
            value={this.state.date}
            selected={this.state.date}
            onChange={(date) => {
              this.setState({ date: date });
            }}
            showTimeSelect
            timeFormat="HH:mm"
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </DivPicker>
        <Button
          onClick={(e) => {
            this.props.addRemainder(this.state.text, this.state.date);
            this.setState({ text: "" });
          }}
        >
          Add Reminder
        </Button>

        {this.render_Remainders()}

        <Button
          onClick={() => this.props.clear_Remainder()}
          style={{ backgroundColor: "#b3002d", marginBottom: "20px" }}
        >
          Clear Reminder
        </Button>
      </Form>
    );
  }
}
const mapStateToProps = (state) => ({
  remainders: state,
});

export default connect(mapStateToProps, {
  addRemainder,
  remove_Remainder,
  clear_Remainder,
})(AppForm);
