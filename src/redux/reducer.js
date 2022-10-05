import { SET_FAV ,DEL_FAV } from "./actions";

const InitialState = {
  Favorite: []
};

function Reducer(state = InitialState, { type, payload }) {
  switch (type) {
    case SET_FAV:
      return {
        ...state,
        Favorite: state.Favorite.find((char) => char?.id === payload.id)
          ? [...state.Favorite]
          : [...state.Favorite, payload],
      };
    case DEL_FAV:
      return {
        ...state,
        Favorite: state.Favorite.filter(
          (char) => char?.id !== payload.id
        ),
      };
    default:
      return state;
  }
}

export default Reducer;
