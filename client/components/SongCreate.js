import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import BackButton from 'Components/BackButton';
import query from 'Queries/fetchSongs';

const SongCreate = (props) => {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.mutate({
      variables: { title: title },
      // when inserting data, you may have to refetch data
      refetchQueries: [{ 
        query,
       // variables: you can add variables here 
      }]
    }).then(() => {
      setTitle('');
      props.history.push('/');
    })
    
  }

  return (
    <div>
      <BackButton />
      <h3>Create A New Song</h3>
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
export default graphql(mutation)(
  graphql(query)(SongCreate));