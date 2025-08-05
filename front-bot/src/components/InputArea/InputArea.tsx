// src/components/InputArea/InputArea.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { FiSend } from 'react-icons/fi'; // React Icons ainda é útil para ícones
import { useChatStore } from '../../store/chatStore';
import styles from './InputArea.module.css'; // Importa o módulo CSS

interface FormInputs {
  message: string;
}

const InputArea: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const addMessage = useChatStore((state) => state.addMessage);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (data.message.trim()) {
      addMessage({ text: data.message, sender: 'user' });
      // Simula uma resposta do bot
      setTimeout(() => {
        addMessage({ text: `Entendi: "${data.message}"`, sender: 'bot' });
      }, 1000);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.inputForm}>
      <input
        {...register('message', { required: true })}
        type="text"
        placeholder="Digite sua mensagem..."
        className={styles.textInput}
      />
      <button type="submit" className={styles.sendButton}>
        <FiSend className={styles.sendIcon} />
        <span className={styles.sendText}>Enviar</span>
      </button>
    </form>
  );
};

export default InputArea;