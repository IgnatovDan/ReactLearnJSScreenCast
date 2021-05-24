import {render, screen} from '@testing-library/react';
import Article from './Article';

test('title', () => {
    render(<Article article={{title: 'title1'}}/>);
    expect(screen.getByText("title1")).toBeInTheDocument();
});

test('date', () => {
    render(<Article article={{date: new Date(2020, 10, 2)}}/>);
    expect(screen.getByText(new Date(2020, 10, 2).toDateString())).toBeInTheDocument();
});

test('isOpened: true', () => {
    render(<Article article={{text: 'text1'}} defaultIsOpened={true} />);
    expect(screen.getByText("text1")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
    expect(() => screen.getByText("Open")).toThrow();
});

test('isOpened: false', () => {
    render(<Article article={{text: 'text1'}}  defaultIsOpened={false}/>);
    expect(() => screen.getByText("text1")).toThrow();
    expect(() => screen.getByText("Close")).toThrow();
    expect(screen.getByText("Open")).toBeInTheDocument();
});

test('toggleBodyButtonHandler', () => {
    // TODO: how to test it ?
});

test('UNSAFE_componentWillReceiveProps', () => {
    // TODO: how to test it ?
});
