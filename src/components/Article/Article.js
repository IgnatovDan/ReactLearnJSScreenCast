import {Component} from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: props.article?.isOpened }; // TODO: is it correct?
  }

  toggleBodyButtonHandler = () => {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const article= this.props.article || {};
    const articleBody = this.state.isOpened && <div>{article.text}</div>;
    return (
      <div>
        <h2>
          {article.title}
          <button onClick={this.toggleBodyButtonHandler}>
            { this.state.isOpened ? 'Close' : 'Open' }
          </button>
        </h2>
        {articleBody}
        <h3><span>creation date</span>: <span>{(new Date(article.date)).toDateString()}</span></h3>
      </div>
    );
  }
}

export default Article;