import Article from '../Article/Article';
import './style.css';

export default function ArticleList({ articles }) {
    // TODO: inplace suggestions doesn't work for className: "article-list__li"
    // TODO: force spaces after "="
    // TODO: rename 'ArticleList.js' to 'index.js'

    const listItems = articles.map((article, index) => 
        <li key = {article.id} className = "article-list__li"><
            Article article = {article}  defaultIsOpened={index === 0}/>
        </li>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}