import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const LyricList = (props) => {

  const { lyrics } = props;
  const onLike = (id, likes) => {
    props.mutate({
      variables: { id },
      optimisticResponse: {
        __type: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1 
        }
      }
    });
  };

  const renderLyrics = () => lyrics.map(({content, id, likes}) => {
    return (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
          <i
            className="material-icons"
            onClick={() => onLike(id, likes)}
          >
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    );
  });

  return (
    <ul className="collection">
      {renderLyrics()}
    </ul>
  );
};

const mutation = gql`
  mutation LikeLyric($id: ID) {
  likeLyric(id: $id) {
    id
    likes
  }
}
`;
export default graphql(mutation)(LyricList);