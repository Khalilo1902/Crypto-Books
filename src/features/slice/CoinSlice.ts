import {createAsyncThunk, createEntityAdapter, createSlice, EntityState} from "@reduxjs/toolkit";
import {ICoinItem} from "../../interface";
import {RootState} from "../store.ts";
import {getAllCoins} from "../service/service.ts";

interface ICoinState {
    status: "Loading" | "Failed" | "Completed"
    error: string | null
    coinId:string
}

const coinAdapter = createEntityAdapter<ICoinItem, string>({
    selectId: (coin: ICoinItem) => coin.id
})

const initialState: ICoinState & EntityState<ICoinItem, string> = coinAdapter.getInitialState({
    status: "Loading",
    error: "",
    coinId:""
})
export const getApiAllCoins = createAsyncThunk("coin/getApiAllCoins", async () => {
    const response = await getAllCoins()
    return response.data
})

const coinSlice = createSlice({
    name: "coin",
    initialState,
    reducers: {
        setCoinId:(state,action)=>{
            state.coinId= action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getApiAllCoins.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(getApiAllCoins.fulfilled, (state, action) => {
                state.status = "Completed"
                coinAdapter.setAll(state, action.payload)
            })
            .addCase(getApiAllCoins.rejected, (state, action) => {
                state.status = "Failed"
                state.error = action.error.message || " an Error is Accourded"
            })
    }
})

export const {
    selectAll: displayAll,
    selectById: displayCoinById
} = coinAdapter.getSelectors((state: RootState) => state.coin)


const {setCoinId}= coinSlice.actions
export default coinSlice.reducer

