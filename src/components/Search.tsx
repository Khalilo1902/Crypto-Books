import {useDispatch} from "react-redux";
import {AppDispatch} from "../features/store.ts";
import debounce from "lodash.debounce";
import {searchApiCoins, searchDataCoins} from "../features/slice/SearchSlice.ts";
import SearchInput from "./SearchInput.tsx";
import {useEffect} from "react";
import {getApiAllCoins} from "../features/slice/CoinSlice.ts";



const Search = ()=>{

    const dispatch = useDispatch<AppDispatch>();

    const debounceFunction = debounce(function (val: string) {
        dispatch(searchApiCoins(val))
    }, 2000)


    useEffect(() => {
        dispatch(getApiAllCoins());
        dispatch(searchApiCoins(""));
        dispatch(searchDataCoins(""));
    }, [dispatch])
    return (
        <div className="relative">

        <SearchInput handleSearch={debounceFunction}/>
        </div>
    )
}



export  default  Search