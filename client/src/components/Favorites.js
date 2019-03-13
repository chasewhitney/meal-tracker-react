import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Favorites = styled.div`
  flex: 1 0 20%;
  flex-direction: column;
  border-right: 1px solid grey;
  min-height: 80vh;
  align-items: center;
  text-align: center;

  & * {
    margin: 1rem;
  }
`;

const FavItem = styled.div`
  border: 1px solid black;
  position: relative;
  padding: 1rem 1rem;
  cursor: pointer;
  border-radius: .5rem;

  & button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps, actions)(props => {
  const {favorites} = props.auth;
  if(favorites.length === 0) {
    return (
      <Favorites>
        <h1>Favorites</h1>
        No favorites added yet
      </Favorites>
    );
  }
  return(
    <Favorites>
      <h1>Favorites</h1>
      {favorites.map(item => {
        return (
          <FavItem key={item._id}>
            <div onClick={(e) => props.handleMealSubmit(item)}>
              {item.name} - {item.servingSize}
            </div>
            <button onClick={() => props.deleteFavorite(item._id)}>X</button>
          </FavItem>
        )
      })}
    </Favorites>
  );
});
