import axios from 'axios';
import * as actions from './actionTypes';

const SERVER_NAME = "http://localhost:3002";

export const getUsers = () => async dispatch => {
    try{
        const res = await axios.get(`${SERVER_NAME}/users/1`)
        dispatch( {
            type: actions.GET_USERS,
            payload: res.data
        })
    }
    catch(error){
       throw error;
    }

}

export const getCarrerHistory = () => async dispatch => {
    try{
        const res = await axios.get(`${SERVER_NAME}/carrer/1`)
        dispatch( {
            type: actions.GET_CARRER,
            payload: res.data
        })
    }
    catch(error){
       throw error;
    }

}

export const getAcademicHistory = () => async dispatch => {
    try{
        const res = await axios.get(`${SERVER_NAME}/academic/1`)
        dispatch( {
            type: actions.GET_ACADEMIC,
            payload: res.data
        })
    }
    catch(error){
       throw error;
    }

}

export const getSkills= () => async dispatch => {
    try{
        const res = await axios.get(`${SERVER_NAME}/skills/1`)
        dispatch( {
            type: actions.GET_SKILLS,
            payload: res.data
        })
    }
    catch(error){
       throw error;
    }

}