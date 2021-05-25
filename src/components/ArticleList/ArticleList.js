import Article from '../Article/Article';
import './style.css';

export default function ArticleList({ articles }) {
    // TODO: why inplace suggestions doesn't work for className: "article-list__li"
    // TODO: how to force spaces after " = ", "{ xxx }", "<xx />"

    console.log(`ArticleList: defaultIsOpened - ${articles[0].title}`);
    const listItems = articles?.map((article, index) => 
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