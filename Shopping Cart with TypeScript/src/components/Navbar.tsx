import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <nav className="px-4 py-3 bg-white shadow-sm mb-3 sticky top-0">
            <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex space-x-4">
                    <NavLink to="/" className="hover:font-semibold no-underline">Home</NavLink>
                    <NavLink to="/store" className="hover:font-semibold no-underline">Store</NavLink>
                    <NavLink to="/about" className="hover:font-semibold no-underline">About</NavLink>
                </div>
                {cartQuantity >= 0 && (
                    <button className="relative border rounded-full p-1 border-black hover:border-gray-300" onClick={openCart}>
                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="-126.4 -126.4 1155.66 1155.66" xml:space="preserve" stroke="#000000" stroke-width="5.41716" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-126.4" y="-126.4" width="1155.66" height="1155.66" rx="577.83" fill="#fafafa" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g>
                        </svg>
                        <div className="flex justify-center items-center bg-red-700 rounded-full text-white w-[20px] h-[20px] absolute right-0 buttom-0 transform translate-x-[25%] translate-y-[-35%]">
                            {cartQuantity}
                        </div>
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar
