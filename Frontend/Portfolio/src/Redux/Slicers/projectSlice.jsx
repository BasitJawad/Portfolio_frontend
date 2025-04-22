import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;




// ----------------------< Thunk to Send Project >--------------------//
export const sendProject = createAsyncThunk(
  "sendProject",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/projects`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// --------------------< Thunk to Send Project >--------------------//



// ----------------------< Thunk to Fetch Projects >--------------------//

export const fetchProjects = createAsyncThunk(
  "fetchProjects", async(data, {rejectWithValue})=>{
    try{
      const response = await axios.get(`${API_BASE_URL}/api/projects`);
      return response.data;
    }catch(error){
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
)
// --------------------< Thunk to Fetch Projects >--------------------//


// Project slice
const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    isLoading: false,
    hasError: false,
    error: null,
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // ----------------------< SEND PROJECT >--------------------//
    builder
      .addCase(sendProject.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        state.error = null;
      })
      .addCase(sendProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects.push(action.payload);
      })
      .addCase(sendProject.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.error = action.payload;
      });
    // --------------------< SEND PROJECT >--------------------//


      // ----------------------< FETCH PROJECTS >--------------------//
      builder
      .addCase(fetchProjects.pending,(state)=>{
        state.isLoading = true;
        state.hasError = false;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled,(state, action)=>{
        state.isLoading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected,(state, action)=>{
        state.isLoading = false;
        state.hasError = true;
        state.error = action.payload;
      });
      // --------------------< FETCH PROJECTS >--------------------//
  },
});

export default projectSlice.reducer;
export const { addProject } = projectSlice.actions;

