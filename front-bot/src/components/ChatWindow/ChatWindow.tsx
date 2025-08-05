// src/components/ChatWindow/ChatWindow.tsx
import React, { useRef, useEffect } from 'react';
import Message from '../Message/Message'; // Ajuste o caminho
import { useChatStore } from '../../store/chatStore';
import styles from './ChatWindow.module.css'; // Importa o módulo CSS

const ChatWindow: React.FC = () => {
  const { messages } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.chatWindow}>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatWindow;