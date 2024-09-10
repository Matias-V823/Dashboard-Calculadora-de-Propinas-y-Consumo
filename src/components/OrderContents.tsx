import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}


const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
    return (
        <div>
            <h2 className=' text-4xl'> Consumo</h2>
            <div className="space-y-3 mt-5">
                {
                    order.map(item => (
                        <div key={item.id} className="flex justify-between shadow-md rounded-lg mt-5 p-8 items-center bg-white">
                            <div>

                                <p className="text-lg ">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                            <div>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="bg-red-500 h-8 w-8 rounded-full text-white text-xs">
                                    X
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default OrderContents