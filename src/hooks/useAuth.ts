import { useCallback, useState } from 'react';
import axios from 'axios';

import { User } from '../types/api/user';
import { useHistory } from 'react-router-dom';
import { useMessage } from './useMessage';
import { useLoginUser } from './useLoginUser';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });

            showMessage({ title: 'A-OK', status: 'success' });
            history.push('/home');
          } else {
            showMessage({ title: 'You are not a member', status: 'error' });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: 'You fucked up', status: 'error' });
          setLoading(false);
        });
    },
    [history, setLoginUser, showMessage],
  );
  return { login, loading };
};
