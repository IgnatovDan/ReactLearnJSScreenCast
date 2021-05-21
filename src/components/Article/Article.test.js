import {render, screen} from '@testing-library/react';
import Article from './Article';

test('first Article test', () => {
    render(<Article article={{title: 'title1', text: 'text1', date: new Date(2020, 10, 2)}}/>);
    expect(screen.getByText("title1")).toBeInTheDocument();
    expect(screen.getByText("text1")).toBeInTheDocument();
    expect(screen.getByText(new Date(2020, 10, 2).toDateString())).toBeInTheDocument();
});