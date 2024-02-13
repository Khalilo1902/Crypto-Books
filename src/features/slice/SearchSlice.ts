import {createAsyncThunk, createEntityAdapter, createSlice, EntityState} from "@reduxjs/toolkit";
import {ISearchCoins} from "../../interface";
import {getSearchCoins} from "../service/service.ts";
import {RootState} from "../store.ts";

interface ISearchState {
    status: "Loading" | "Completed" | "Failed"
    error: string | null

}

const searchCoinAdapter = createEntityAdapter<ISearchCoins, string>({
    selectId: (searchCoin) => searchCoin.id||""
})

const initialState: ISearchState & EntityState<ISearchCoins, string> = searchCoinAdapter.getInitialState({
    status: "Loading",
    error: "",

})

export const searchApiCoins = createAsyncThunk("searchCoins/searchApiCoins", async (query:string) => {
    const response = await getSearchCoins(query)
    return response.data.coins
})

// Asynchrone Thunk für API-Aufruf mit spezifischer Münze
export const searchDataCoins = createAsyncThunk("searchCoins/searchDataCoins", async (coinId: string) => {
    const response = await getSearchCoins(coinId); // Du musst die Logik für den API-Aufruf anpassen
    return response.data.coins;
});

const searchCoinsSlice = createSlice({
    name: "searchCoins",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(searchApiCoins.pending, (state) => {
            state.status = "Loading"
        })
            .addCase(searchApiCoins.fulfilled, (state, action) => {
                state.status = "Completed";
                searchCoinAdapter.setAll(state, action.payload)
            })
            .addCase(searchDataCoins.fulfilled, (state, action) => {
                searchCoinAdapter.setAll(state, action.payload);
                console.log("First element id:", action.payload[0].id);
            })
            .addCase(searchApiCoins.rejected, (state, action) => {
                state.status = "Failed";
                state.error = action.error.message || "an error is Accourded"
            })
    }
})


export const {
    selectAll: displayAllSearchCoins,
    selectById: displayByIdSearchCoins
} = searchCoinAdapter.getSelectors((state: RootState) => state.searchCoins)


export default searchCoinsSlice.reducer