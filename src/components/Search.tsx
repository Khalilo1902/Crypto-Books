import {useDispatch} from "react-redux";
import {AppDispatch} from "../features/store.ts";
import debounce from "lodash.debounce";
import {searchApiCoins} from "../features/slice/SearchSlice.ts";
import SearchInput from "./SearchInput.tsx";


const Search = ()=>{

    const dispatch = useDispatch<AppDispatch>();

    const debounceFunction = debounce(function (val: string) {
        dispatch(searchApiCoins(val))
    }, 2000)
    return (
        <div className="relative">

        <SearchInput handleSearch={debounceFunction}/>
        </div>
    )
}



export  default  Search