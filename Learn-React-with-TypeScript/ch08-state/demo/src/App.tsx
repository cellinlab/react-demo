import { Provider } from 'react-redux';

import { store } from './store/store';

import { Main } from './Main';
import { Header } from './Header';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Provider store={store}>
        <Header />
        <Main />
      </Provider>
    </div>
  );
}

export default App;
