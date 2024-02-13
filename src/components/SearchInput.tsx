import searchIcon from "../assets/search-icon.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchDataCoins,
  displayAllSearchCoins,
} from "../features/slice/SearchSlice.ts";
import { AppDispatch } from "../features/store.ts";
import { ISearchCoins } from "../interface";
import { DebouncedFunc } from "lodash";
import { setCoinId } from "../features/slice/CoinSlice.ts";

type ISearchProps = {
  handleSearch: DebouncedFunc<(val: string) => void>;
};

const SearchInput = ({ handleSearch }: ISearchProps) => {
  const [searchText, setSearchText] = useState("");
  const allSearchCoins: ISearchCoins[] = useSelector(displayAllSearchCoins);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchDataCoins(""));
  }, [dispatch]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
    handleSearch(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(event.currentTarget.search.value);
    setSearchText("");
    console.log("Search Text after submit:", event.currentTarget.search.value);
  };

  const handleCoinClick = (coinId: string) => {
    dispatch(searchDataCoins(coinId));
    dispatch(setCoinId(coinId));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-96 relative flex items-center ml-7 font-nunito"
      >
        <input
          type="text"
          name="search"
          onChange={handleInput}
          value={searchText}
          className="w-full rounded bg-gray-200 placeholder:text-gray-200 pl-2 required outline-0 border border-transparent focus:border-cyan"
          placeholder="search here..."
          autoComplete="off"
        />
        <button type="submit" className="absolute right-1 cursor-pointer">
          <img src={searchIcon} alt="search" className="w-full h-auto" />
        </button>
      </form>
      {searchText.length > 0 ? (
        <ul className="z-40 absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          {allSearchCoins && allSearchCoins.length > 0 ? (
            allSearchCoins.map((coin: ISearchCoins) => (
              <li
                key={coin.id}
                className="flex items-center mö-4 my-2 cursor-pointer"
                onClick={() => handleCoinClick(coin.id)}
              >
                <img
                  className="w-[1.2rem] h-[1.2rem] mx-1.5"
                  src={coin.thumb}
                  alt={coin.name}
                />
                <span> {coin.name}</span>
              </li>
            ))
          ) : (
            <h2>Please wait...</h2>
          )}
        </ul>
      ) : null}
    </>
  );
};

export default SearchInput;
