import { useEffect, useReducer } from 'react';

import { getPerson } from './getPerson';

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | { type: 'init'; payload: { name: string } }
  | { type: 'increament' }
  | { type: 'decreament' }
  | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'init':
      return { ...state, name: action.payload.name, loading: false, score: 0 };
    case 'increament':
      return { ...state, score: state.score + 1 };
    case 'decreament':
      return { ...state, score: state.score - 1 };
    case 'reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export function PersonScore() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });

  useEffect(() => {
    getPerson().then((person) => {
      dispatch({ type: 'init', payload: { name: person.name } });
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>
        {name},{score}
      </h3>
      <button onClick={() => dispatch({ type: 'increament' })}>Add</button>
      <button onClick={() => dispatch({ type: 'decreament' })}>Subtract</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
