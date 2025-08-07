import {create} from "zustand";
import type {MassageStoreModel} from "../model/massageStore.model.tsx";

export const useMassageStore = create<MassageStoreModel>((set) => ({
    massages: [],
    add: (mass) => set((state) => ({
        massages: [...state.massages, mass]
    })),
    addMany: (masses) => set((state) => ({
        massages: masses ?? []
    }))
}));