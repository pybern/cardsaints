import { InventoryProvider } from "@/components/cart/InventoryContext";
import { CartProvider } from "@/components/cart/CartContext";
import { CartUIProvider } from "@/components/cart/CartUIContext";
import ShopHeader from "@/components/shop/ShopHeader";
import CartDrawer from "@/components/cart/CartDrawer";

export default function ShopLayout({ children }) {
  return (
    <InventoryProvider>
      <CartProvider>
        <CartUIProvider>
          <div className="flex min-h-screen flex-col">
            <ShopHeader />
            <div className="flex-1">{children}</div>
            <CartDrawer />
            <footer className="border-t border-border px-6 py-8 text-sm text-muted">
              <div className="mx-auto flex max-w-6xl flex-col gap-1">
                <p>
                  <em>Card Saints</em> — One Piece TCG releases. Prices in HKD.
                </p>
                <p>
                  This is a demonstration storefront. Inventory and checkout are mocked; no
                  payment is processed.
                </p>
              </div>
            </footer>
          </div>
        </CartUIProvider>
      </CartProvider>
    </InventoryProvider>
  );
}
