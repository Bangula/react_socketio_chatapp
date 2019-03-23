import React, { Component } from "react";
import socketClient from "socket.io-client";
import { connect } from "react-redux";
import Messages from "./Messages";
import PropTypes from "prop-types";

import mssgSound from "../../audio/intuition.mp3";

class Chatroom extends Component {
  constructor() {
    super();
    this.scrollDiv = React.createRef();
  }

  state = {
    mssgToSend: "",
    recivedMssg: "",
    mssgList: [],
    typing: null,
    socket: null,
    value: null
  };

  componentDidMount() {
    const socket = socketClient.connect("/");
    this.setState({
      socket
    });

    socket.on("chat", data => {
      this.setState({
        mssgList: [...this.state.mssgList, data]
      });
      if (data.name && data.name !== this.props.userName) {
        let sound = new Audio(mssgSound);
        sound.volume = 0.5;
        sound.play();
      }
    });

    socket.on("typing", data => {
      console.log(data);
      this.setState({
        typing: data.name,
        value: data.mssg
      });
    });
  }

  handleChange = e => {
    let { socket } = this.state;
    this.setState(
      {
        mssgToSend: e.target.value
      },
      () => {
        socket.emit("typing", {
          name: this.props.userName,
          mssg: this.state.mssgToSend
        });
      }
    );
  };
  sendMessage = e => {
    e.preventDefault();
    if (this.state.mssgToSend === "") {
      return;
    }
    const { socket } = this.state;
    socket.emit("chat", {
      name: this.props.userName,
      message: this.state.mssgToSend
    });
    this.setState({
      mssgToSend: ""
    });
    this.scrollDiv.current.scrollTop = this.scrollDiv.current.scrollHeight;
  };
  render() {
    return (
      <div className="container chatApp z-depth-5">
        <h5 className="center-align teal-text text-darken-1">
          Chat with other developers
        </h5>

        <div className="messages" ref={this.scrollDiv}>
          <Messages mssgList={this.state.mssgList} />
        </div>
        <div className="hos-typing">
          <span className="grey-text">
            {this.state.value ? `${this.state.typing} is typing...` : ""}
          </span>
        </div>
        <form onSubmit={this.sendMessage}>
          <input
            onKeyUp={this.handleChange}
            onChange={this.handleChange}
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

Chatroom.propTypes = {
  userName: PropTypes.string
};

const mapStateToProps = state => ({
  userName: state.user.user.name
});

export default connect(mapStateToProps)(Chatroom);
