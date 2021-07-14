import { useCallback, useState } from 'react';
import axios from 'axios';
import { User } from '../types/api/user';
import { useHistory } from 'react-router-dom';
import { useMessage } from './useMessage';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'A-OK', status: 'success' });
            history.push('/home');
          } else {
            showMessage({ title: 'You are not a member', status: 'error' });
          }
        })
        .catch(() => showMessage({ title: 'You fucked up', status: 'error' }))
        .finally(() => {
          setLoading(true);
        });
    },
    [history, showMessage],
  );
  return { login, loading };
};
