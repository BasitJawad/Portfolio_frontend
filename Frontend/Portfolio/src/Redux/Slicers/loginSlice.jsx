import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Thunk to send login credentials
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 

// 🔹 Fetch User Details

export const fetchUserDetails = createAsyncThunk(
    "fetchUserDetails",
    async (userId, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users/${userId}`);
        return response.data; // { userName, profilePic }
      } catch (error) {
        return rejectWithValue(error.response?.data || "Error fetching user details");
      }
    }
  );

  
  export const sendCredentials = createAsyncThunk(
    "sendCredentials",
    async (data, { rejectWithValue, dispatch }) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/api/login`, data);
        const resData = response.data;
  
        if (resData.userId) {
          sessionStorage.setItem("userId", resData.userId);
          dispatch(fetchUserDetails(resData.userId));
        }
  
        if (resData.message === "Login Successful") {
          sessionStorage.setItem("isLoggedIn", "true");
        } else {
          sessionStorage.setItem("isLoggedIn", "false");
        }
        return resData;
      } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
      }
    }
  );
  

  // Sinup Thunk
  export const sendSignUpData = createAsyncThunk(
    "sendSignUpData",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/api/signup`, data);
        console.log("API Response:", response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
      }
    }
  );



// Initial state
const initialState = {
    email: "",
    password: "",
    hasError: false,
    message: "",
    isLoggedIn: sessionStorage.getItem("isLoggedIn") == "true" || false,
    userId: sessionStorage.getItem("userId") || null,
    isLoading: false,    
    userName: "",
    profilePic: "",
};


// Redux Slice
const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
      logout: (state) => {
        state.isLoggedIn = false;
        state.userId = null;
        state.userName = "";
        state.profilePic = "";
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("isLoggedIn");
      }
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendCredentials.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.message = "";
            })
            .addCase(sendCredentials.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.isLoggedIn = action.payload.message?.trim() === "Login Successful";
                state.message = action.payload.message;
                state.userName = action.payload.userName;
                state.profilePic = action.payload.profilePic;
            
                if (state.isLoggedIn) {
                    sessionStorage.setItem("isLoggedIn", "true");  // ✅ Store login state
                }
            
                console.log("Login Successful. isLoggedIn:", state.isLoggedIn); // 🔍 Debug
            })
            .addCase(sendCredentials.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.message = action.payload;  // ✅ Show actual error message
            })

            .addCase(fetchUserDetails.fulfilled, (state, action) => {
                state.userName = action.payload.userName;
                state.profilePic = action.payload.profilePic;
              })
              .addCase(sendSignUpData.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.message = "Loading..." ;
              })
              .addCase(sendSignUpData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.message = action.payload.message;
                state.userId = action.payload.userId; // Store userId from the response
                // localStorage.setItem("userId", action.payload.userId); // Store userId in localStorage
              })
              .addCase(sendSignUpData.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.message = action.payload; // Show actual error message
              })
    }
});

export default loginSlice.reducer;
export const { logout } = loginSlice.actions;