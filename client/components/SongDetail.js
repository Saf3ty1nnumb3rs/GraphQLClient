import React from 'react';
import { graphql } from 'react-apollo';
import query from 'Queries/fetchSong';
import BackButton from 'Components/BackButton';
import LyricCreate from 'Components/LyricCreate';
import LyricList from 'Components/LyricList';

const SongDetail = ({ data }) => {
  const { song } = data;

  
  if (!song) return <div>Loading...</div>;
  return (
    <div>
      <BackButton />
      {song &&
      <>
        <h4>{song.title}</h4>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate id={song.id}/>
      </>
      }
    </div>
  );
};

export default graphql(query, {
  options: (props) => { return { variables: { id: props.match.params.id}}}
})(SongDetail);