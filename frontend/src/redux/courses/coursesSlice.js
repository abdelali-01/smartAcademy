import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    courses : [] ,
    selectedCategory : "all" ,
    status : "idle" ,
    isFree : false ,
}

const coursesSlice = createSlice({
    name  :"courses" ,
    initialState ,
    reducers : {
        isRequest : (state)=>{
            state.status = "pending"
        },
        isGetted : (state , action)=>{
            state.status = "complete" ,
            state.courses = action.payload; 
        },
        checkIfThereIsFree : (state)=>{
            if(state.courses){
                const check = state.courses.some(course => course.free) ;
                if(check) state.isFree = true ;
            }else{
                state.isFree = false ;
            }
        },
        setSelectedCategory : (state , action) => {
            state.selectedCategory = action.payload ;
        },
    }
});

export const {isRequest , isGetted , checkIfThereIsFree , setSelectedCategory} = coursesSlice.actions ;
export const coursesReducer = coursesSlice.reducer ;