import { Main } from './Main';
import { Header } from './Header';
import { AppProvider } from './AppContext';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </div>
  );
}

export default App;
