import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Counter from './pages/Counter';
import UserList from './pages/UserList';
import WindowSize from './pages/useWindowSize/Demo';
import UseCallbackDemo from './pages/useCallback/Demo';
import UseMemoDemo from './pages/useMemo/Demo';
import UseRefDemo from './pages/useRef/Demo';
import UseContextDemo from './pages/useContext/Demo';
import UseSingletonDemo from './pages/useSingleton/Demo';
import UseCounterDemo from './pages/useCounter/Demo';
import UseAsyncDemo from './pages/useAsync/Demo';
import UseScrollDemo from './pages/useScroll/Demo';
import ArticleList from './pages/AticleList';
import HelloRedux from './pages/HelloRedux';
import ReactRedux from './pages/ReactRedux';
import ReduxThunk from './pages/ReduxThunk';

import MinimizeState from './pages/MinimizeState';
import ControlledComponent from './pages/ControlledComponent';
import ApiClient from './pages/ApiClient';
import RenderProps from './pages/FunctionalComponent/RenderProps';
import ListWithMore from './pages/FunctionalComponent/ListWithMore';
import CustomEvent from './pages/EventHandle/CustomEvent';
import UseKeyPress from './pages/EventHandle/useKeyPress';
import UseForm from './pages/useForm';
import UseModal from './pages/useModal';
import ToyRouter from './pages/ToyRouter';

function App() {
  return (
    <Router basename='/'>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/window-size" element={<WindowSize />} />
        <Route path="/use-callback" element={<UseCallbackDemo />} />
        <Route path="/use-memo" element={<UseMemoDemo />} />
        <Route path="/use-ref" element={<UseRefDemo />} />
        <Route path="/use-context" element={<UseContextDemo />} />
        <Route path="/use-singleton" element={<UseSingletonDemo />} />
        <Route path="/use-counter" element={<UseCounterDemo />} />
        <Route path="/use-async" element={<UseAsyncDemo />} />
        <Route path="/use-scroll" element={<UseScrollDemo />} />
        <Route path="/article-list" element={<ArticleList />} />
        <Route path="/hello-redux" element={<HelloRedux />} />
        <Route path="/react-redux" element={<ReactRedux />} />
        <Route path="/redux-thunk" element={<ReduxThunk />} />

        <Route path="/minimize-state" element={<MinimizeState />} />
        <Route path="/controlled-component" element={<ControlledComponent />} />
        <Route path="/api-client" element={<ApiClient />} />
        <Route path="/render-props" element={<RenderProps />} />
        <Route path="/list-with-more" element={<ListWithMore />} />
        <Route path="/custom-event" element={<CustomEvent />} />
        <Route path="/use-key-press" element={<UseKeyPress />} />
        <Route path="/use-form" element={<UseForm />} />
        <Route path="/use-modal" element={<UseModal />} />
        <Route path="/toy-router" element={<ToyRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
