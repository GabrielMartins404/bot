// src/components/Message/Message.tsx
import React from 'react';
import styles from './Message.module.css'; // Importa o módulo CSS

interface MessageProps {
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({ text, sender, timestamp }) => {
  const isUser = sender === 'user';
  const messageClasses = isUser ? styles.userMessage : styles.botMessage;

  return (
    <div className={`${styles.messageContainer} ${messageClasses}`}>
      <p className={styles.messageText}>{text}</p>
      <span className={styles.timestamp}>{timestamp}</span>
    </div>
  );
};

export default Message;