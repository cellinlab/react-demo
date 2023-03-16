import { CheckList } from './CheckList';

function App() {
  return (
    <div className="p-10">
      <CheckList
        data={[
          { id: 1, name: 'Cell', role: 'Manager' },
          { id: 2, name: 'John', role: 'Developer' },
        ]}
        id="id"
        primary="name"
        secondary="role"
      />
    </div>
  );
}

export default App;
