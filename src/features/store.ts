import {configureStore} from "@reduxjs/toolkit";
import coinSlice, {getApiAllCoins} from "./slice/CoinSlice.ts";
import searchCoinsSlice, {searchApiCoins} from "./slice/SearchSlice.ts";


const store = configureStore({
    reducer: {
        coin: coinSlice,
        searchCoins: searchCoinsSlice
    }
})

store.dispatch(getApiAllCoins())
store.dispatch(searchApiCoins(""))


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store