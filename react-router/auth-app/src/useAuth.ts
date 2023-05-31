import { useContext } from 'react';

import AuthContext from './store';

const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};

export default useAuth;
