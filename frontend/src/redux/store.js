import { courses } from "@/data";
import { coursesReducer } from "./courses/coursesSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer : {
        courses : coursesReducer ,
    }
})

export default store ;