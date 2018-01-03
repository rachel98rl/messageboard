import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './message';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentMessage: "",
      messages: ["Hello World", "Another message", "Sushi"]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <h1>Message Board </h1>
          </div>
          <div className="new-message-container">
            <div className="col-lg-12">
              <div className="input-group">
                <input value={this.state.currentMessage} onChange={this.currentMessageChanged.bind(this)} type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                  <button onClick={this.postMessage.bind(this)} className="btn btn-secondary" type="button">Post</button>
                  </span>
              </div>
            </div>
          </div>

            <div>
              {this.renderMessages()}
            </div>
        </div>
      </div>
    );
  }

postMessage(event){
  const newMessages = [this.state.currentMessage].concat(this.state.messages);
  this.setState({
    messages: newMessages,
    currentMessages: ""
  });
}

  currentMessageChanged(event){
    this.setState({
      currentmessage: event.target.value
    });
  }

  renderMessages(){
    const messages = [];
    this.state.messages.forEach((message) => {
      messages.push(
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Message message={message}/>
        </div>
      );
    });
    return messages;
  }
}

export default App;
