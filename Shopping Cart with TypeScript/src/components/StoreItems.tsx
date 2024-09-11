import { useShoppingCart } from "../context/ShoppingCartContext"
import formatCurrency from "../utilities/formatCurrency"

type StoreItemsProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem ({ id, name, price, imgUrl }: StoreItemsProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <div className="border rounded-t-lg shadow-lg p-4 w-full h-[100%]">
            <img src={imgUrl} alt="Card image" className="w-full h-[700px] object-cover rounded-t-lg"/>
            <div className="flex flex-col p-4">
                <div className="flex justify-between align-baseline mb-4">
                    <span className="text-md font-semibold">{name}</span>
                    <span className="ml-2 text-gray-500">{formatCurrency(price)}</span>
                </div>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <button className="w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-700" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</button>
                    ): <div className="flex items-center flex-col gap-[0.5rem]">
                            <div className="flex items-center justify-center gap-[0.5rem]">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-md" onClick={() => decreaseCartQuantity(id)}>-</button>
                                <div>
                                    <span className="text-xl font-semibold">{quantity}</span> in cart
                                </div>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-md" onClick={() => increaseCartQuantity(id)}>+</button>
                            </div>
                            <button className="bg-red-700 hover:bg-red-900 text-white text-sm p-1 rounded-md" onClick={() => removeFromCart(id)}>Remove</button>
                        </div>}
                </div>
            </div>
        </div>
    )
}