import React, { useState } from "react";
import { Launcher } from "react-chat-window";
import useSocket from 'use-socket.io-client';

const MESSAGE_LISTENER_KEY = 'listener-key';

const Chat = props => {

  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [chat, setChat] = useState([]);
  const [chatIsLoading, setChatIsLoading] = useState(false);
  const [friendisLoading, setFriendisLoading] = useState(true);
  const [message, setMessage] = useState('');

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
    // socket.emit('chat message', input, room);
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