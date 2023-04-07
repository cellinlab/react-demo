
const ListWithMore = ({ data = [], renderItem, max }) => {
  const elements = data.map((item, index) => renderItem(item, index, data));
  const listContent = elements.slice(0, max);
  const hideContent = elements.slice(max);

  return (
    <div>
      {listContent}
      {hideContent.length > 0 && (
        <div
          style={
            {
              position: 'relative',
            }
          }
        >
          <span
            style={
              {
                cursor: 'pointer',
              }
            }
            onClick={
              (e) => {
                e.target.nextSibling.style.display = 'block';
                e.target.style.display = 'none';
              }
            }
          > {hideContent.length} more ...</span>
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              display: 'none',
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px 0',
            }}
          >{hideContent}</div>
        </div>
      )}
    </div>
  );
};

const Demo = () => {
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
  ];

  return (
    <div>
      <h1>Render Props</h1>
      <fieldset style={{ width: '200px' }}>
        <legend>List 1</legend>
        <ListWithMore
          data={data}
          renderItem={(item) => <div key={item.id}>{item.name}</div>}
          max={5}
        />
      </fieldset>
      <fieldset style={{ width: '200px' }}>
        <legend>List 2</legend>
        <ListWithMore
          data={data}
          renderItem={(item) => <span key={item.id}>{item.name}</span>}
          max={3}
        />
      </fieldset>
    </div>
  );
};

export default Demo;
