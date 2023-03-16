import { CheckList } from './CheckList';

function App() {
  return (
    <div className="p-10">
      <CheckList
        data={[
          { id: 1, name: 'Cell', role: 'Manager' },
          { id: 2, name: 'John', role: 'Developer' },
          { id: 3, name: 'Jane', role: 'Developer' },
          { id: 4, name: 'Peter', role: 'UI' },
          { id: 5, name: 'Mary', role: 'UI' },
          { id: 6, name: 'Mike', role: 'QA' },
        ]}
        id="id"
        primary="name"
        secondary="role"
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      />
    </div>
  );
}

export default App;
