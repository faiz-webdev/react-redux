export const depositMonye = (amt) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amt,
    });
  };
};

export const withdrawMonye = (amt) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amt,
    });
  };
};
