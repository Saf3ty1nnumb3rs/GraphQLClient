import React from 'react';
import { graphql } from 'react-apollo';
import query from 'Queries/fetchSong';
import BackButton from 'Components/BackButton';

const SongDetail = ({ data }) => {
  const { song } = data;

  const renderLyrics = () => song.lyrics.map(({content, id}) => {
    return (
      <li key={id} className="collection-item">
        {content}
      </li>
    );
  });
  if (!song) return <div>Loading...</div>;
  return (
    <div>
      <BackButton />
      {song &&
      <>
        <h4>{song.title}</h4>
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