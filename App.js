
const uwu = function () {
  return (alert("UwU Lad"))
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  
  render () {
    return (<div>
      <h1>uwu lad</h1>
        <button onClick={uwu()}>Q</button>
      </div>
      )
  }
}
  ReactDOM.render(<App />, document.getElementById('root'))