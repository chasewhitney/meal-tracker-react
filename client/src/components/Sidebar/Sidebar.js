import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as S from "./Sidebar.jsx.js";

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(props => {
  const { favorites } = props.auth;
  if (favorites.length === 0) {
    return (
      <S.Sidebar>
        <h1>Favorites</h1>
        <p>No favorites added yet</p>
      </S.Sidebar>
    );
  } else {
    return (
      <S.Sidebar className="Sidebar">
        <h1>Favorites</h1>
        {favorites.map(item => {
          return (
            <S.FavItem key={item._id}>
              <div onClick={e => props.handleMealSubmit(item)}>
                {item.name} - {item.servingSize}
              </div>
              <button onClick={() => props.deleteMealFromFavorites(item._id)}>
                X
              </button>
            </S.FavItem>
          );
        })}
      </S.Sidebar>
    );
  }
});
