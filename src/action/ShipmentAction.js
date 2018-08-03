import * as ActionType from './ActionType';
import ShipmentApi from '../api/ShipmentApi';
import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';



export const getCoursesResponse = shipments => ({
    type: ActionType.GET_SHIPMENTS_RESPONSE,
    shipments
});



export function getCoursesAction() {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return ShipmentApi.getAllShipment()
            .then(shipments => {
                dispatch(getCoursesResponse(shipments));
            }).catch(error => {
                throw error;
            });
    };
}



export const addNewCourseResponse = () => ({
    type: ActionType.ADD_NEW_SHIPMENT_RESPONSE
});



export const updateExistingCourseResponse = () => ({
    type: ActionType.UPDATE_EXISTING_SHIPMENT_RESPONSE
});



export function saveCourseAction(courseBeingAddedOrEdited) {
    return function (dispatch) {

        dispatch(ApiCallBeginAction());

        //if authorId exists, it means that the course is being edited, therefore update it.
        //if authorId doesn't exist, it must therefore be new course that is being added, therefore add it
        return ShipmentApi.saveCourse(courseBeingAddedOrEdited)
            .then(() => {
                if (courseBeingAddedOrEdited.id) {
                    dispatch(updateExistingCourseResponse());
                } else {
                    dispatch(addNewCourseResponse());
                }
            }).then(() => {
                dispatch(getCoursesAction());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw (error);
            });
    };
}



export const getCourseResponse = courseFound => ({
    type: ActionType.GET_COURSE_RESPONSE,
    course: courseFound
});



export function getCourseAction(courseId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return ShipmentApi.getCourse(courseId)
            .then(course => {
                dispatch(getCourseResponse(course));
            }).catch(error => {
                throw error;
            });
    };
}



export const deleteCourseResponse = () => ({
    type: ActionType.DELETE_COURSE_RESPONSE
});



export function deleteCourseAction(courseId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return ShipmentApi.deleteCourse(courseId)
            .then(() => {
                dispatch(deleteCourseResponse());
            }).then(() => {
                dispatch(getCoursesAction());
            }).catch(error => {
                throw error;
            });
    };
}