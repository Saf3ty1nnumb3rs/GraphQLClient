import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {

  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
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
        <ul className="collection" >
          {this.renderSongs()}
        </ul>
        }
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;
export default graphql(query)(SongList);