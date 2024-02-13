import TableComponent from "../components/TableComponent.tsx";
import Filter from "../components/Filter.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store.ts";
import { useEffect, useState } from "react";
import { displayAllCoin, setCoinId } from "../features/slice/CoinSlice.ts";

const Crypto = () => {
  const [pre, setPre] = useState(100);
  const [next, setNext] = useState(120);
  const dispatch = useDispatch();
  const { coinId } = useSelector((state: RootState) => state.coin);
  const getAllCoins = useSelector(displayAllCoin);
  useEffect(() => {
    dispatch(setCoinId(coinId));
    setPre(pre);
    setNext(next);
  }, [dispatch, coinId, pre, next]);
  console.log("pre: ", pre, " next: ", next);
  return (
    <section className="z-20 w-[80%] flex flex-col mt-16 mb-24 relative">
      <Filter />
      <TableComponent pre={pre} setPre={setPre} next={next} setNext={setNext} />
      <div className="w-full flex justify-center gap-10 mt-6">
        <button
          className="px-5 py-2 bg-green rounded-lg"
          onClick={() => {
            if (pre <= 0) {
              setPre(0);
              setNext(20);
            } else {
              setNext(pre);
              setPre(pre - 20);
            }
          }}
        >
          prev
        </button>
        <button
          className="px-5 py-2 bg-red rounded-lg"
          onClick={() => {
            if (next >= getAllCoins.length) {
              setNext(next);
              setPre(pre);
            } else {
              setPre(next);
              setNext(next + 20);
            }
          }}
        >
          next
        </button>
      </div>
    </section>
  );
};

export default Crypto;
