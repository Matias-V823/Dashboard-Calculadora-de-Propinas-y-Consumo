import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  placeOrder:() => void
}


const OrderTotals = ({order, tip, placeOrder} : OrderTotalsProps) => {


  const subtotalAmount = useMemo(() => order.reduce((total, item) => total +( item.quantity * item.price), 0 ) , [order])
  const tipAmout = useMemo(() => subtotalAmount * tip,[tip,order])
  const totalAmount = useMemo(() => subtotalAmount + tipAmout,[tip,order])

  return (
    <>
      <div className="space-y-3">
          <h2 className="font-black text-2xl">Totales y Propina</h2>
          <p>Subtotal a pagar:
            <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
          </p>
          <p>Propina:
            <span className="font-bold"> {formatCurrency(tipAmout)}</span>
          </p>
          <p>Total a Pagar:
            <span className="font-bold"> {formatCurrency(totalAmount)}</span>
          </p>
      </div>
      <button 
        className="w-full bg-black p-3 text-white uppercase font-bold disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
        >
        Guardar Orden
      </button>
    </>
  )
}

export default OrderTotals