import React, { useState} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const LyricCreate = (props) => {
  const [lyric, setLyric] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.mutate({
      variables: {
        content: lyric,
        songId: props.id
      }
    });
    setLyric('');
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Add a Lyric</label>
        <input
          type="text"
          value={lyric}
          onChange={(e) => setLyric(e.target.value)}
          onSubmit={onSubmit} 
        />
      </form>
    </div>
  );
};

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID ) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);