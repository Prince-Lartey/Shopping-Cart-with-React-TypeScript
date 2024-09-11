import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import formatCurrency from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item === null) return null

    return (
        <Stack direction="horizontal" gap={2} className="flex items-center">
            <img src={item.imgUrl} className="w-[75px] h-[125px] object-cover"/>

            <div className="me-auto">
                <div>
                    <span className="text-sm mr-1">{item.name}</span>
                    {quantity > 1 && (
                        <span className="text-gray-500 text-[0.65rem]">x{quantity}</span>
                    )}
                </div>
                <div className="text-gray-500 text-[0.75rem]">
                    {formatCurrency(item.price)}
                </div>
            </div>

            <div className="text-xs text-gray-700 fobt-semibold">
                {formatCurrency(item.price * quantity)}
            </div>

            <button className="border hover:bg-red-700 px-2 rounded-lg hover:text-white" onClick={() => removeFromCart(item.id)}>&times;</button>
        </Stack>
    )
}

export default CartItem
