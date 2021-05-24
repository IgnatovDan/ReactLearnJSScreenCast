import ArticleList from '../ArticleList/ArticleList';
import articles from '../../data';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isReversedArticleList: false };
    }

    reverseArticleList = () => {
        this.setState({ isReversedArticleList: !this.state.isReversedArticleList });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">MyApp Name</h1>
                    <button className="btn" onClick={this.reverseArticleList}>Reverse Article List</button>
                </div>
                <ArticleList articles={ this.state.isReversedArticleList ? articles.slice().reverse() : articles } />
            </div>
        );
    }
}

export default App;