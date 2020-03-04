import React, {Component} from 'react';
import './App.css';

let elems = {
  header: 'Dinos be dino-in',
  author: 'Richard Scary',
  content: 'This is a post about DINOS! Listen up ppl!'
}

let commentStuff = [
  {
    commentHeader: 'RAWR',
    commentBody: 'Dinobama says hi!'
  },
  {
    commentHeader: 'Radasaurus',
    commentBody: 'rawrawrrr XD'
  }
];

class Header extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <h3>{this.props.author}</h3>
      </div>
    )
  }
}

class Content extends Component {
  render () {
    return (
      <p>{this.props.content}</p>
    )
  }
}

class Comment extends Component {
  render () {
    return (
      <div>
        <h4>{this.props.commentHeader}</h4>
        <p>{this.props.commentBody}</p>
      </div>
    );
  }
}

class Commentpost extends Component {
  render () {
    let comments = [];
    commentStuff.forEach(function(comment, index) {
      comments.push(
        <Comment
          commentHeader={comment.commentHeader}
          commentBody={comment.commentBody}
        />
      );
    });

    return (
      <div>
        {comments}
      </div>
    );
  }
}

class Button extends Component {
  constructor (props) {
    super();
  }

  render () {
    return (
      <div>
        <button onClick={this.props.onClick}>Edit Body</button>
      </div>
    )
  }
}

class App extends Component {
  constructor (props) {
    super();
    this.state = {
      content: "This is content."
    }
    this.changeBody = this.changeBody.bind(this)
  }

  changeBody(e) {
    e.preventDefault()
    let newContent = prompt("Enter a new body:")
    this.setState((prevState, props) => {
      return {
        content: newContent
      }
    })
  }

  render () {
    return (
      <div className="App">
        <Header header={elems.header} author={elems.author} />
        <Content content={this.state.content} />
        <Button onClick={this.changeBody} />
        <h3>COMMENTS:</h3>
        <Commentpost />
      </div>
    )
  }
}

export default App;