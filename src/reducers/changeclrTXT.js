const CHANGETXT = 'CHANGETXT'
const CHANGECOLOR = 'CHANGECOLOR'
export const colorActn = () => ({
    type: CHANGECOLOR
});

export const txtActn = () => ({
    type: CHANGETXT
});

export function changeTxt(state = 0, action) {
    console.log(action)
    if (action.type === CHANGETXT) {
        return Math.floor(Math.random() * 101);
    }
    else return state
}

export function changeColor(state = 0, action) {
    console.log(action)

    if (action.type === CHANGECOLOR) {
        return Math.floor(Math.random() * 13);
    }
    else return state
}



