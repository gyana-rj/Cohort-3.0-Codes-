import axios from "axios"
import { atom, selector } from "recoil"
export const networkAtom = atom({
    key : "networkAtom",
    default : 104
})

export const jobAtom = atom({
    key : "jobAtom",
    default : 0
})

export const messsagingAtom = atom({
    key : "messagingAtom",
    default : 0
})

export const notificationAtom = atom({
    key : "notificationAtom",
    default : 12
})

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({ get }) => {
        const networkAtomCount = get(networkAtom);
        const jobAtomCount = get(jobAtom);
        const messagingAtomCount = get(messsagingAtom);
        const notificationAtomCount = get(notificationAtom);
        return networkAtomCount + jobAtomCount + messagingAtomCount + notificationAtomCount
    }
})

export const notifications = atom({
    key : "notficationAtom",
    default : selector({
        key : "notficationAtomSelector",
        get : async () => {
            const res = await axios.get("");
            return res.data
        }
    })
})





