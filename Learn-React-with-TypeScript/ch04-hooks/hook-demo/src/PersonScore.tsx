import { useEffect, useReducer, useRef, useMemo, useCallback } from 'react';

import { getPerson } from './getPerson';
import { Reset } from './Reset';

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

function sillyExpensiveFunction() {
  console.log('Excute sillyExpensiveFunction');
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    sum += i;
  }
  return sum;
}

export function PersonScore() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });
  const addBtnRef = useRef<HTMLButtonElement>(null);

  const expensiveCalculation = useMemo(() => sillyExpensiveFunction(), []);

  useEffect(() => {
    getPerson().then((person) => {
      dispatch({ type: 'init', payload: { name: person.name } });
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      addBtnRef.current?.focus();
    }
  }, [loading]);

  const handleReset = useCallback(() => {
    dispatch({ type: 'reset' });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>
        {name},{score}
      </h3>
      <p>{expensiveCalculation}</p>
      <button ref={addBtnRef} onClick={() => dispatch({ type: 'increament' })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: 'decreament' })}>Subtract</button>
      <Reset onClick={handleReset} />
    </div>
  );
}
