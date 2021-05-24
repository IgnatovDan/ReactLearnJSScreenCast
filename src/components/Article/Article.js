import { Component } from 'react';

class Article extends Component {
  constructor(props) {
    console.log('Article.ctor');
    super(props);
    this.state = { isOpened: (props.defaultIsOpened === undefined) ? true : props.defaultIsOpened }; // TODO: copy value from props to state: is it correct?
  }

  toggleBodyButtonHandler = () => {
    this.setState({ isOpened: !this.state.isOpened });
  }

  static getDerivedStateFromProps(props, state) {
    // TODO: change in accordance with https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
    // TODO: no condition to simplify code
    return { isOpened: (props.defaultIsOpened === undefined) ? true : props.defaultIsOpened }
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.defaultIsOpened !== this.props.defaultIsOpened) {
  //     // TODO: change in accordance with https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
  //     //this.setState({ isOpened: (nextProps.defaultIsOpened === undefined) ? true : nextProps.defaultIsOpened });
  //   }
  //   console.log("componentWillReceiveProps");
  // }

  render() {
    // TODO: why 'float-right' doesn't work
    // TODO: why inplace suggestions doesn't work for className: "card mx-auto"

    const article = this.props.article || {};
    const articleBody = this.state.isOpened && <div className="card-text">{article.text}</div>;

    return (
      <div className="card mx-auto" style={{ width: "50%" }}>
        <div className="card-header">
          <h2>
            {article.title}
            <button onClick={this.toggleBodyButtonHandler} className="btn btn-primary btn-lg float-right">
              {this.state.isOpened ? 'Close' : 'Open'}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted"><span>creation date</span>: <span>{(new Date(article.date)).toDateString()}</span></h6>
          {articleBody}
        </div>
      </div>
    );
  }
}

export default Article;