import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import "./App.css";

import { ChannelContainer, ChannelListContainer, Auth } from "./components";

const cookies = new Cookies();

const apiKey = "rtzeyk8q5kn4";

const client = StreamChat.getInstance(apiKey);

const authToken = cookies.get("token");

if (authToken) {
  client.connectUser({
    id: cookies.get("userId"),
    name: cookies.get("userName"),
    fullName: cookies.get("fullName"),
    image: cookies.get("avatarUrl"),
    hashedPassword: cookies.get("hashedPassword"),
    phoneNumber: cookies.get("phoneNumber"),
  }, authToken);
}


const App = () => {
  if (!authToken) return <Auth />;
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer 
        
        />
        <ChannelContainer 
        
        />
      </Chat>
    </div>
  );
};

export default App;
