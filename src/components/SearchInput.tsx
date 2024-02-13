import searchIcon from "../assets/search-icon.svg";

import { useDispatch, useSelector } from "react-redux";

import {
  displayAllCoin,
  setCoinId,
} from "../features/slice/CoinSlice.ts";
import { useEffect, useState } from "react";
import { RootState } from "../features/store.ts";

const SearchInput = () => {
  const getAllCoins = useSelector(displayAllCoin);
  const { coinId } = useSelector((state: RootState) => state.coin);

  console.log("getCoinById: ",coinId);
  const [value, setValue] = useState("");
  const [isSerchItemOpen, setIsSearchItemOpen] = useState(false);
  const dispatch = useDispatch();
  console.log("value: ", value);
  useEffect(() => {
    if (value && !coinId) {
      setIsSearchItemOpen(true);
    } else {
      setIsSearchItemOpen(false);
    }
    !value && dispatch(setCoinId(""));
  }, [value, isSerchItemOpen, coinId]);

  console.log("isSerchItemOpen: ", isSerchItemOpen);
  return (
    <>
      <form className="w-96 relative flex items-center ml-7 font-nunito">
        <input
          type="text"
          name="search"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          className="w-full rounded bg-gray-200 placeholder:text-gray-200 pl-2 required outline-0 border border-transparent focus:border-cyan"
          placeholder="search here..."
          autoComplete="off"
        />
        <button type="submit" className="absolute right-1 cursor-pointer">
          <img src={searchIcon} alt="search" className="w-full h-auto" />
        </button>
      </form>
      {
        <ul
          className={`${
            isSerchItemOpen
              ? "z-40 absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md"
              : "hidden"
          }`}
        >
          {getAllCoins
            .filter((coin) =>
              coin.name.toLowerCase().includes(value.toLowerCase())
            )
            .map((coin) => (
              <li
                key={coin.id}
                className="flex items-center mö-4 my-2 cursor-pointer"
                onClick={() => {
                  dispatch(setCoinId(coin.id));
                  setIsSearchItemOpen(false);
                }}
              >
                <img
                  className="w-[1.2rem] h-[1.2rem] mx-1.5"
                  src={coin.image}
                  alt={coin.name}
                />
                <span> {coin.name}</span>
              </li>
            ))}
        </ul>
      }
    </>
  );
};

export default SearchInput;
