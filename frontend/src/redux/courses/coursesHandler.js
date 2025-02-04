import { courses } from "@/data";
import { checkIfThereIsFree, isFilltring, isGetted, isRequest } from "./coursesSlice"


export const getCourses = () => async (dispatch) => {
    dispatch(isRequest());
    dispatch(isGetted(courses));
    dispatch(checkIfThereIsFree());
};
