export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove token after developing
  token:
    "BQD-M87verh4gKBbLrmpaugjyQBLj1RPytRn1eU2jSysA_vK-N530kf5QRv-I7xD3F4ISxmG6fq8LLjILqF7H9kgKy5bcsmQAqhpMa7ooccj5rGA0ilC_-HcEcxOmL_T-TavTFpsqjQOQQmPmDlq7iXKe0nWT9V6YLulJGLAqwt9KpNHwugP",
};

const reducer = (state, action) => {
  console.log(action);

  // action  --> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      }
    default:
      return state;
  }
};

export default reducer;
