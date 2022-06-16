import './App.css';

function App() {
  const names = [
    'Anderson',
    'Ashwoon',
    'Aikin',
    'Bateman',
    'Bongard',
    'Bowers',
    'Boyd',
    'Cannon',
  ];
  const nameData = names.map((name) => {
    return <li>{name}</li>;
  });
  return (
    <div className='container'>
      <h5>Array : {`${names}`}</h5>
      <ul>{nameData}</ul>
    </div>
  );
}

export default App;
