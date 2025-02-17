import { StateCreator } from "zustand";
import { type GeneralState, initialGeneralState } from "./initialState";
import { createDevtools } from "../middleware/createDevtools";
import { createWithEqualityFn } from "zustand/traditional";
import { subscribeWithSelector } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { type GeneralActions, createGeneralSlice } from "./actions";

export type GeneralStore = GeneralState & GeneralActions

const createStore: StateCreator<GeneralStore, [['zustand/devtools', never]]> = (...parameters) => ({
    ...initialGeneralState,
    ...createGeneralSlice(...parameters)
})

const devtools = createDevtools('general');

export const useGeneralStore = createWithEqualityFn<GeneralStore>()(
    subscribeWithSelector(devtools(createStore)),
    shallow
)