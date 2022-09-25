import React, { useReducer } from "react";
 
const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();


export function useAuthState() {
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
      throw new Error("useAuthState must be used within a AuthProvider");
    }
   
    return context;
  }
   
  export function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
      throw new Error("useAuthDispatch must be used within a AuthProvider");
    }
   
    return context;
  }


//   user and token
let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).auth_token
  : "";



  const AuthReducer = (initialState, action)=>{
    switch (action.type) {
        case "REQUEST_LOGIN":
          return {
            ...initialState,
            loading: true
          };
        case "LOGIN_SUCCESS":
          return {
            ...initialState,
            user: action.payload.user,
            token: action.payload.auth_token,
            loading: false
          };
        case "LOGOUT":
          return {
            ...initialState,
            user: "",
            token: ""
          };
     
        case "LOGIN_ERROR":
          return {
            ...initialState,
            loading: false,
            errorMessage: action.error
          };
     
        default:
          throw new Error(`Unhandled action type: ${action.type}`);
        }
  }
  export const initialState = {
    userDetails: "" || user,
    token: "" || token,
    loading: false,
    errorMessage: null
  };


  
  export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);
   
    return (
      <AuthStateContext.Provider value={user}>
        <AuthDispatchContext.Provider value={dispatch}>
          {children}
        </AuthDispatchContext.Provider>
      </AuthStateContext.Provider>
    );
  };