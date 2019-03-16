import React, { Component } from "react";
import socketClient from "socket.io-client";
import { connect } from "react-redux";
import Messages from "./Messages";

class Chatroom extends Component {
  constructor() {
    super();
    this.scrollDiv = React.createRef();
  }

  state = {
    mssgToSend: "",
    recivedMssg: "",
    mssgList: [],
    socket: null
  };

  componentDidMount() {
    const socket = socketClient.connect("/");

    if (!localStorage.jwtToken) {
      this.props.history.push({ pathname: "/signin" });
    }

    this.setState({
      socket
    });

    socket.on("chat", data => {
      console.log(data);
      this.setState({
        mssgList: [...this.state.mssgList, data]
      });
    });

    socket.on("typing", data => {
      console.log(data);
    });
  }
  onTyping = () => {
    const { socket } = this.state;
    socket.emit("typing", {
      name: this.props.userName
    });
  };
  handleChange = e => {
    this.setState({
      mssgToSend: e.target.value
    });
  };
  sendMessage = e => {
    e.preventDefault();
    const { socket } = this.state;
    socket.emit("chat", {
      name: this.props.userName,
      message: this.state.mssgToSend
    });
    this.setState({
      mssgToSend: ""
    });
    this.scrollDiv.current.scrollTop = this.scrollDiv.current.scrollHeight - 50;
  };
  render() {
    return (
      <div className="container chatApp z-depth-5">
        <h3 className="center-align teal-text text-darken-1">
          Welcome to chat room
        </h3>

        <div className="messages" ref={this.scrollDiv}>
          <Messages mssgList={this.state.mssgList} />
        </div>

        <form onSubmit={this.sendMessage}>
          <input
            onChange={this.handleChange}
            onKeyPress={this.onTyping}
            placeholder="Your message..."
            value={this.state.mssgToSend}
          />
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.user.user.name
});

export default connect(mapStateToProps)(Chatroom);
