
import { ShoppingBag } from "lucide-react";

function CartWidget() {
    return (
        <div className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 flex">
        <ShoppingBag size={32} />
        <span>3</span>
        </div>
    )
}

export default CartWidget