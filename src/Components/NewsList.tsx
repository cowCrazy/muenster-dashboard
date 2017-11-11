import * as React from 'react';
import { ISearchParams } from '../App';
import { NewsService, INewsResult } from '../Services/NewsService';

interface INewsListProps {
    searchParams: ISearchParams;
}
interface INewsListState {
    news: Array<INewsResult>;
}

class NewsList extends React.Component<INewsListProps, INewsListState> {

  constructor(props: INewsListProps) {
    super(props);

    this.state = {
      news: []
    };
    new NewsService().loadNews(
      (results: Array<INewsResult>) => {
        this.setState({
          news: results
        });
      }
    );
  }

  render() {
    console.log('Rendering results');
    return (
      <div className="wn_news">
      <h2 className="title">WN Aktuell</h2>
          {this.state.news.map((result: INewsResult) => {

            return (
              <article
                key={result.id}
                className="box"
              >
              <div className="content ">
                <a className="subtitle" href={result.url}>{result.title}</a>
                <div className="content">
                 {result.description}
                 </div>
               </div>
              </article>
            );
          })}
      </div>
    );
  }
}

export default NewsList;