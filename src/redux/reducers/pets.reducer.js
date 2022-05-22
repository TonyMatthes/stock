export const pets = (state = [], action) => {
    switch (action.type) {
        case 'SET_PETS':
            return action.payload;
    }
    return state;
}