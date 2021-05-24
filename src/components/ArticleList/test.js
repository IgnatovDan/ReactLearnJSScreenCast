// TODO: how to test it

import {render, screen} from '@testing-library/react';
import ArticleList from './ArticleList';

test('null', () => {
    render(<ArticleList articles={null}/>);
    // TODO: how to test no Article componets were created
});

test('undefined', () => {
    render(<ArticleList articles={undefined}/>);
    // TODO: how to test no Article componets were created
});

test('[]', () => {
    render(<ArticleList articles={[]}/>);
    // TODO: how to test no Article componets were created
});

test('[Article1, Article2]', () => {
    // TODO: how to test several Article componets are generated with 'props.article === articles[i]'
    // TODO: how to test fisrtArticle.state.isOpened === true
});

