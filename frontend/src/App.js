import './App.css';

function App() {
  
  fetch('http://localhost:8080/hello')
    .then(response => response.text())
    .then(data => {
      console.log(data); // JSON 응답 처리
  });

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
