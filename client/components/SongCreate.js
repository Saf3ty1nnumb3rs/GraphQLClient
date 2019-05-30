import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const SongCreate = (props) => {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.mutate({
      variables: {
        title: title
      }
    });
    setTitle('')
  }

  return (
    <div>
      <h3>Creat A New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title:</label>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      id
      title
    }
  }
`;
export default graphql(mutation)(SongCreate);