import * as actionTypes from '../store/actions';
import { sudoku } from 'sudoku.js/sudoku.js';

const boardString = sudoku.generate('hard');
const puzzleArr = sudoku.board_string_to_grid(boardString);

const mapKeysToFields = (arr) => {
    let ids = [];
    return arr.map((sudokuBlock) => {
        return sudokuBlock.map((field) => {
            let id;
            for (let i = 0; i < 1; i++) {
                id = parseInt(Math.floor(Math.random() * 10000000));
                if (ids.includes(id)) {
                    i--;
                } else {
                    ids.push(id);
                }
            }
            const hasInitialValue = field !== '.';

            return {
                id: parseInt(Math.floor(Math.random() * 10000000)),
                value: field,
                hasInitialValue: hasInitialValue
            }
        })
    })
}

const initialState = {
    nightMode: false,
    mobileView: window.innerWidth < 800,
    fields: mapKeysToFields(puzzleArr),
    timer: 0,
    timerRunning: true,
    activeBlockElementId: null,
    possible: [],
    displayNotification: false
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
                ...state,
                fields: state.fields.concat().map((sudokuBlock) => {
                    return sudokuBlock.map(blockElement => {
                        if (blockElement.id === action.id) {
                            blockElement.value = action.value;
                        }
                        return {
                            id: blockElement.id,
                            value: blockElement.value,
                            hasInitialValue: blockElement.hasInitialValue
                        };
                    })})

            }
        case actionTypes.BLOCK_ELEMENT_ACTIVE:
            return {
                ...state,
                activeBlockElementId: action.elementId
            }
        case actionTypes.GET_HINT:
            let index1 = null;
            let index2 = null;
            state.fields.forEach((block, index) => {
                for (let i = 0; i < block.length; i++) {
                    if (block[i].id === state.activeBlockElementId) {
                        index1 = index;
                        index2 = i;
                    }
                }
                return;
            })
            return {
                ...state,
                possible: sudoku.get_candidates(boardString)[index1][index2].split(''),
                displayNotification: true,
                timer: state.timer + 120
            }
        case actionTypes.UPDATE_TIMER:
            return {
                ...state,
                timer: state.timer + 1
            }
        case actionTypes.CANCEL_NOTIFICATION:
            return {
                ...state,
                displayNotification: false
            }
        case actionTypes.TIMER_TOGGLE:
            return {
                ...state,
                timerRunning: !state.timerRunning
            }
        default:
            return state;
    }
}

export default reducer;