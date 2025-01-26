import { createSlice } from '@reduxjs/toolkit'

const initialState = {
updateInputsState: false,
    loginForm:{
        module: 'React Mod7',
        username: '',
        email: '',
        password: 'mod7USIP-HERLAN'
    }   
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      initialForm: (state, action) => {
        state.loginForm= action.payload;
      },
      cleanForm: (state) => {
        state.loginForm = {
          module: '',username: '',email: '',password: '',          
        };
      },
      setInputsDisabled: (state, action) => {
        state.updateInputsState = action.payload; 
    }
    },
  });
  
  export const { initialForm, cleanForm, setInputsDisabled } = formSlice.actions;
  export default formSlice.reducer;