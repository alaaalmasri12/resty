import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import './components/design/design.scss';
import './components/form/form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
    };
  }
      handleUrl =e=> {
    let url = e.target.value;
    this.setState({ url });

  };

  handleClick = e => {
    e.preventDefault();
        document.getElementById('final-result').textContent='';
    let url = this.state.url;
    console.log(this.state);
  document.getElementById('final-result').textContent=this.state.method+' '+this.state.url
    this.setState({ url });

  }
  handleMethod = e => {
    let method = e.target.value;
    this.setState({ method });
  }
  render() {
    return (
      <section>
        <form>
          <div className="urlinput">
          <label>Url</label><input type="text" id="url" onChange={this.handleUrl} />
          <button onClick={this.handleClick}>GO</button>
          </div>
          <div>
          <input type="radio" name="method"  onClick={this.handleMethod} value="Get"/>Get
          <input type="radio" name="method"  onClick={this.handleMethod}  value="POST"/>POST
          <input type="radio" name="method"  onClick={this.handleMethod} value="PUT"/>PUT
          <input type="radio" name="method" onClick={this.handleMethod}  value="DELETE"/>DELETE
          <br />
          <textarea id="final-result" />
          </div>
        </form>
      </section>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
