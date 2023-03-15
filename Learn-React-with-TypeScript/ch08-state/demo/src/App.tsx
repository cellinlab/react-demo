import { useReducer } from 'react';

import { Main } from './Main';
import { Header } from './Header';
import { authenticate, User } from './api/authenticate';
import { authorize } from './api/authorize';

type State = {
  user: undefined | User;
  permissions: undefined | string[];
  loading: boolean;
};

const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
};

type Action =
  | { type: 'authenticate' }
  | { type: 'authenticated'; user: User | undefined }
  | { type: 'authorize' }
  | { type: 'authorized'; permissions: string[] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'authenticate':
      return { ...state, loading: true };
    case 'authenticated':
      return { ...state, user: action.user, loading: false };
    case 'authorize':
      return { ...state, loading: true };
    case 'authorized':
      return { ...state, permissions: action.permissions, loading: false };
    default:
      return state;
  }
}

function App() {
  const [{ user, permissions, loading }, dispatch] = useReducer(reducer, initialState);
  async function handleSignInClick() {
    dispatch({ type: 'authenticate' });
    const user = await authenticate();
    dispatch({ type: 'authenticated', user });
    if (user !== undefined) {
      dispatch({ type: 'authorize' });
      const permissions = await authorize(user.id);
      dispatch({ type: 'authorized', permissions });
    }
  }
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Header user={user} loading={loading} onSignInClick={handleSignInClick} />
      <Main user={user} permissions={permissions} />
    </div>
  );
}

export default App;
