export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const MORE_DATA = 'MORE_DATA';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

//Import the sample data
import Data from '../data.json';


export function getData(){
    return (dispatch) => {
 
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            const data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);
 
    };
}

export function getMoreData(){
    return (dispatch) => {
 
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            const data  = Data.instructions;
            dispatch({type: MORE_DATA, data:data});
        }, 2000);
 
    };
}