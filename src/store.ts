import {create} from 'zustand'

type ActiveLink = {
    active: string;
    setIsActive: (link:string) => void;
}

export const useActiveLink = create<ActiveLink>((set)=>({
    active:'home',
    setIsActive(link:string) {
        set({ active:link })
    },
}))