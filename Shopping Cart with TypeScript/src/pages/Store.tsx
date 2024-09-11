import { StoreItem } from "../components/StoreItems"
import storeItems from "../data/items.json"

const Store = () => {
    return (
        <>
            <h1 className="text-5xl mb-5">Store</h1>
            <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {storeItems.map(item => (
                    <div key={item.id} className="w-full sm:w-full md:w-full lg:w-full">
                        <StoreItem {...item} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Store
