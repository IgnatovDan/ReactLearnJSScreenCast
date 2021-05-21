import Article from '../Article/Article';
import articles from '../../data';

function App() {
    return (
        <div>
            <h1>MyApp Name</h1>
            <Article article={articles[0]}/>
        </div>
    );
}

export default App;