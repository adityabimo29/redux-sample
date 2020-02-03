import axios from 'axios';
export const SET_DATA = "SET_DATA";

export const setData = (data) => {
    return {
        type:SET_DATA,
        payload:data
    }
}

//const API_GITHUB = process.env.REACT_APP_GITHUB

// export const fetchData = () => async dispatch => {
//     const dataGithub = await axios.get('https://api.github.com/users/adityabimo29');
//     const result = dispatch(setData(dataGithub.data));

//     return result;
// };

export const fetchData = () => dispatch => {
    return axios.get('https://api.github.com/users/adityabimo29').then(result => {
        dispatch(setData(result.data));
    });
};