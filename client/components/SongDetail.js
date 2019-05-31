import React from 'react';
import { graphql } from 'react-apollo';
import query from 'Queries/fetchSong';

const SongDetail = (props) => {
  const { data } = props;

  const renderLyrics = () => data.song.lyrics.map(({content, id}) => {
    return (
      <li key={id} className="collection-item">
        {content}
      </li>
    );
  });

  return (
    <div>
      <h3>Song Detail</h3>
      {data.loading && <p>Loading...</p>}
      {!data.loading &&
      <>
        <h5>{data.song.title}</h5>
        <ul className="collection">
          {renderLyrics()}
        </ul>
      </>
      }
    </div>
  );
};

export default graphql(query, {
  options: (props) => { return { variables: { id: props.match.params.id}}}
})(SongDetail);