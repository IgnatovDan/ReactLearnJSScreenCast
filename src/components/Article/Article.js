import { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: (props.defaultIsOpened === undefined) ? true : props.defaultIsOpened }; // TODO: is it correct?
  }

  toggleBodyButtonHandler = () => {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    // TODO: float-right doesn't work
    // TODO: inplace suggestions doesn't work for className: "card mx-auto"

    const article = this.props.article || {};
    const articleBody = this.state.isOpened && <div className = "card-text">{article.text}</div>;

    return (
      <div className = "card mx-auto" style = {{width: "50%"}}>
        <div className = "card-header">
          <h2>
            {article.title}
            <button onClick = {this.toggleBodyButtonHandler} className = "btn btn-primary btn-lg float-right">
              {this.state.isOpened ? 'Close' : 'Open'}
            </button>
          </h2>
        </div>
        <div className = "card-body">
          <h6 className = "card-subtitle text-muted"><span>creation date</span>: <span>{(new Date(article.date)).toDateString()}</span></h6>
          {articleBody}
        </div>
      </div>
    );
  }
}

export default Article;