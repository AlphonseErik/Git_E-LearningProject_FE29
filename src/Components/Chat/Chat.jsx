import React, { Component } from "react";
import { Launcher } from "react-chat-window";
import useSocket from 'use-socket.io-client';



const Chat = props => {

  // // const [socket] = useSocket('socket-url')
  // const [id, setId] = React.useState("");
  // const [socket] = useSocket('<https://open-chat-naostsaecf.now.sh>');

  // socket.connect();
  // console.log(socket);

  const [nameInput, setNameInput] = React.useState("");
  const [room, setRoom] = React.useState("");

  const [state, setState] = React.useState({
    messageList: [],
  })

  const _onMessageWasSent = (message) => {
    setState({
      messageList: [...state.messageList, message]
    })
  }

  const _sendMessage = (text) => {
    if (text.length > 0) {
      setState({
        messageList: [...state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  return (
    <div className="container">
      <Launcher
        agentProfile={{
          teamName: 'Chat Window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={_onMessageWasSent.bind(this)}
        messageList={state.messageList}
        showEmoji
      />
    </div>
  )
}

export default Chat;