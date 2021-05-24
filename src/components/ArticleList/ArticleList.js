import Article from '../Article/Article';
import './style.css';

export default function ArticleList({ articles }) {
    console.log('ArticleList');
    // TODO: why inplace suggestions doesn't work for className: "article-list__li"
    // TODO: how to force spaces after " = ", "{ xxx }", "<xx />"

    const listItems = articles?.map((article, index) => 
        <li className = "article-list__li">
            <Article article = {article}  defaultIsOpened={index === 0}/>
        </li>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}