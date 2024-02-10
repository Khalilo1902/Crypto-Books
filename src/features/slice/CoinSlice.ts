import {createEntityAdapter, createSlice, EntityState} from "@reduxjs/toolkit";
import {ICoinItem} from "../../interface";
import {RootState} from "../store.ts";

interface ICoinState {
    status: "Loading" | "Failed" | "Completed"
    error: string | null
}

const coinAdapter = createEntityAdapter<ICoinItem, string>({
    selectId: (coin: ICoinItem) => coin.id
})

const initialState: ICoinState & EntityState<ICoinItem, string> = coinAdapter.getInitialState({
    status: "Loading",
    error: ""
})


const coinSlice = createSlice({
    name: "coin",
    initialState,
    reducers: {},
    extraReducers: () => {

    }
})

export const {
    selectAll: displayAll,
    selectById: displayCoinById
} = coinAdapter.getSelectors((state: RootState) => state.coin)

export default coinSlice.reducer

