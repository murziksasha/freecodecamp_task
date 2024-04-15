// Change code below this line
class MyComponent extends React.Component {
  constructor(props){
    super(props);
  }
render(){

  return(
    <h1>My First React Component!</h1>
  )
}
}

ReactDOM.render(<MyComponent />, document.querySelector('#challenge-node'));

//Example with prop-types, default props, and mix with class and fucn Component

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name={this.props.name}/>
      </div>
    );
  }
};
// Change code below this line

const Camper = (props) => {
  return <p>{props.name}</p>
};

Camper.defaultProps = {
  name: 'CamperBot',
};


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: 'React Rocks!'
    })
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};