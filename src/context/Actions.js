export const ROOT_URL = 'https://dev-mentor-backend.vercel.app';

export async function SignUpUser(dispatch , loginPayload){
  const requestOptions = {
    method: 'POST',
    mode:"cors",
    headers: { 'Content-Type': 'application/json'   , "Access-Control-Allow-Origin":"*"},
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await fetch(`${ROOT_URL}/user/`, requestOptions);
    let data = await response.json();

   if(data.errors){
  
    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return data;
   }

  console.log(data , "payload")
   dispatch({ type: 'LOGIN_SUCCESS', payload: data })
   localStorage.setItem('currentUser', JSON.stringify(data));
   localStorage.setItem('token',data.token)
   return data; 
  
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }


}

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    mode:"cors",
    headers: { 'Content-Type': 'application/json'   , "Access-Control-Allow-Origin":"*"},
    body: JSON.stringify(loginPayload),
  };

 try {
  dispatch({ type: 'REQUEST_LOGIN' });
  let response = await fetch(`${ROOT_URL}/user/login`, requestOptions);
  let data = await response.json();
  
  if(data){
    dispatch({ type: 'LOGIN_SUCCESS', payload: data })
    localStorage.setItem('currentUser', JSON.stringify(data));
    localStorage.setItem('token',data.token)
    return data; 
  }

  dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
  return;

} catch (error) {
  dispatch({ type: 'LOGIN_ERROR', error: error });
}
}
 
export async function logout(dispatch) {
  
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
  
}