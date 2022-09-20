import './App.css';

function retornarAleatorio() {
  return Math.trunc(Math.random() * 10);
}

function App() {
  const buscadores = [
    'https://www.google.com',
    'https://www.bing.com',
    'https://www.yahoo.com'
  ];

  return (
    <div>
      <a href={buscadores[0]}>Google</a><br/>
      <a href={buscadores[1]}>Bing</a><br/>
      <a href={buscadores[2]}>Yahoo!</a><br/>
    </div>
  );
}

export default App;
