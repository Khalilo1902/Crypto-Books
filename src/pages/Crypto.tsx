import TableComponent from "../components/TableComponent.tsx";
import Filter from "../components/Filter.tsx";


const Crypto = () => {



    return (
    <section className="z-20 w-[80%] flex flex-col mt-16 mb-24 relative">
        <Filter/>
<TableComponent/>
    </section>
)
};

export default Crypto;