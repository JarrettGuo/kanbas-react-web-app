import { createSlice } from '@reduxjs/toolkit';
import assignmentsData from '../../Database'; // Assuming you have a similar structure for assignments

const initialState = {
    assignments: assignmentsData['assignments'], // Assuming your assignments data structure is similar
    assignment: { title: 'New Assignment', description: 'It is a assignment', course: '',points:'100',dueDate:'',availableFromDate:'',availableUntilDate:'',assignTo:'' }, // Default assignment structure
    selectedAssignmentIds: [], // Changed from a Set to an array
  };  
  

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState: initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        ...state.assignments,
        { ...action.payload, _id: new Date().getTime().toString() },
      ];
      alert(`Assignment added successfully!`);
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
      alert(`Assignment deleted successfully!`);
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
          // return action.payload;
        } else {
          return assignment;
        }
      });
      alert(`Assignment updated successfully!`);
    },    
    setAssignment: (state, action) => {
      state.assignment = action.payload;
      console.log(state.assignment);
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
