import * as actionTypes from '../store/actions';
import { sudoku } from 'sudoku.js/sudoku.js';

const boardString = sudoku.generate('easy');
const puzzleArr = sudoku.board_string_to_grid(boardString);
console.log(puzzleArr)

const initialState = {
    nightMode: false,
    mobileView: window.innerWidth < 800,
    fields: puzzleArr
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.NIGHT_MODE_CHANGE:
            return {
                ...state,
                nightMode: !state.nightMode
            }
        case actionTypes.RESIZE:
            return {
                ...state,
                mobileView: window.innerWidth < 800
            }
        case actionTypes.BLOCK_ELEMENT_CHANGE:
            // Handle on change logic
            return {
                ...state
            }
            break;
        default:
            return state;
    }
}

export default reducer;