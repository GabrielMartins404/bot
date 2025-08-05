// src/App.tsx
import React from 'react';
import ChatWindow from './components/ChatWindow/ChatWindow'; // Ajuste o caminho
import InputArea from './components/InputArea/InputArea';     // Ajuste o caminho
import styles from './App.module.css'; // Importa o módulo CSS

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.chatContainer}>
        <header className={styles.chatHeader}>
          Meu Chatbot Gemini-like (Sem Tailwind)
        </header>
        <ChatWindow />
        <InputArea />
      </div>
    </div>
  );
};

export default App;