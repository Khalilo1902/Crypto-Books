import Search from "./Search.tsx";

const Filter = () => {
    return (
        <div className="w-full h-12 border-2 border-gray-100 rounded-lg
        flex items-center justify-between relative
        ">
            <Search/>
            <div>currency</div>
            <div>sorting</div>
        </div>
    );
};

export default Filter;
