import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from 'Queries/fetchSongs';

class SongList extends Component {

  onSongDelete(id) {
    this.props.mutate({ variables: { id }, refetchQueries: [{ query }] })
  }
  renderSongs() {
    return this.props.data.songs.map(({ title, id }) => {
      return (
        <li key={id} className="collection-item">
          {title}
          <i
            className="material-icons red right"
            onClick={() => this.onSongDelete(id)}
          >
            delete
          </i>
        </li>
      )
    })
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {data.loading &&
        <p>Loading...</p>
        }
        {!data.loading &&
        <>
          <ul className="collection" >
            {this.renderSongs()}
          </ul>
          <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
          >
            <i className="material-icons">add</i>
          </Link>
        </>
        }
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id){
      id
    }
}
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);
