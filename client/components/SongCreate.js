import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const SongCreate = (props) => {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.mutate({
      variables: {
        title: title
      }
    }).then(() => {
      setTitle('');
      props.history.push('/');
    })
    
  }

  return (
    <div>
      <div style={{ 
        display: 'flex',
        alignItems: 'center'
        }}
      >
        <Link
        to="/"
        className="btn-floating btn-med raised blue left"
        style={{
          marginRight: '10px'
        }}
        >
        <i className="material-icons">arrow_back</i>
        </Link>
        <h6>Back To List</h6> 
      </div>
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
export default graphql(mutation)(SongCreate);