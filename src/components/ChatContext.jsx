"use client";
import { createContext, useContext, useState } from "react";

const ChatContext = createContext(undefined);

export function ChatProvider({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const toggleChat = () => {};
  const openChat = () => {};
  const closeChat = () => {};

  return (
    <ChatContext.Provider value={{ isChatOpen: true, toggleChat, openChat, closeChat }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => {
  return { isChatOpen: true, toggleChat: () => {}, openChat: () => {}, closeChat: () => {} };
};
