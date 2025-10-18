import { atom, selector } from "recoil"

export const counterAtom = atom({
    default : 0,
    key : "counter"
})


// this thing is dependent on the counterAtom 
export const evenSelector = selector({
    key : "isEvenSelector",
    get : ({ get }) => {
        const currentCount = get(counterAtom);
        const isEven = (currentCount % 2 == 0);
        return isEven;
    }
})