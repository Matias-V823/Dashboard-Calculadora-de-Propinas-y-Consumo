import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="py-5">
        <h1 className="text-center text-5xl font-semibold">Dashboard</h1>
        <p className="text-center text-zinc-400">Calculadora de Propinas y Consumo</p>
      </header>
      <main className="max-w-7xl mx-auto mt-20 mb-20 grid md:grid-cols-2">
        <div className="shadow-xl py-16 px-20 rounded-lg">
          <h2 className="text-4xl">Menú</h2>
          <div className="space-y-3 mt-10">

            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 py-16 px-20 rounded-lg space-y-10 bg-indigo-300">
          {
            order.length > 0 ? (
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />
                <TipPercentageForm
                  setTip={setTip}
                  tip={tip}
                />
                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />

              </>
            ):(
              <p className="text-center">La orden está vacia </p>
            )
          }
        </div>

      </main>
    </>
  )
}

export default App
