import { atom } from "recoil"

export const personalData = atom({
    key: 'user',
    default: {
        username: '',
        email: '',
        pw: '',
        avatarQ: ['q1_1'],
        backpack: [],
    }
})