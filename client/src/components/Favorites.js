import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Favorites = styled.div`
  background-color: yellow;
  flex: 0 1 25%;
  flex-direction: column;
`;

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps, actions)(props => {
  const {favorites} = props.auth;
  if(favorites.length === 0) {
    return (
      <Favorites>
        <h2>Favorites</h2>
        No favorites added yet
      </Favorites>
    );
  }
  return(
    <Favorites>
      <h2>Favorites</h2>
      {favorites.map(item => {
        return (
          <div key={item._id}>
            <div onClick={(e) => props.handleMealSubmit(item)}>
              <img style={{width: "40px"}} src={item.img} alt="Food item"/>
              {item.name} - {item.servingSize}
            </div>
            <button onClick={() => props.deleteFavorite(item._id)}>Delete</button>
          </div>
        )
      })}
    </Favorites>
  );
});
