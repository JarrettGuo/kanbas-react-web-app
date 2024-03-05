import { createSlice } from "@reduxjs/toolkit";
import modules from "../../Database";


const initialState = {
  modules: modules["modules"],
  module: { name: "New Module", description: "New Description" },
  selectedModuleIds: [], // Use an array instead of a Set
};


const modulesSlice = createSlice({
  name: "modules",
  initialState: initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        ...state.modules,
        { ...action.payload, _id: new Date().getTime().toString() },
      ];
      alert(`Module added successfully!`);
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
        alert(`Module deleted successfully!`);
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
        alert(`Module updated successfully!`);
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});


export const { addModule, deleteModule,updateModule, setModule} = modulesSlice.actions;
export default modulesSlice.reducer;