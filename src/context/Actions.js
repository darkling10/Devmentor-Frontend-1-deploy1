const ROOT_URL = 'https://secret-hamlet-03431.herokuapp.com';



export async function loginUser(dispatch, loginPayload) {
  console.log("We are in login User")
  
}
 
export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}

