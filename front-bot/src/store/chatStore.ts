// src/store/chatStore.ts
import { create } from 'zustand';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ChatState {
  messages: Message[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (newMessage) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Math.random().toString(36), // ID simples para exemplo
          timestamp: new Date().toLocaleTimeString(),
          ...newMessage,
        },
      ],
    })),
}));