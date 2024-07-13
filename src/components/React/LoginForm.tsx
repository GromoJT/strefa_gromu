import { useState } from 'react';
import * as css from './styles/LoginForm.module.css';
import {client} from "../../data/stores/store"
import { useStore } from '@nanostores/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const {mutate} = 

  const handleLogin = () => {
    mutate({email,password})
  }


  return (
    <div>
      <ReactQueryDevtools queryClient={client} />
     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
     <button type="button">Login</button>
    </div>
  );
};

export default LoginForm;


