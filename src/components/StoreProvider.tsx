'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/lib/products';
export type CartLine = { product: Product; quantity: number; size?: string };
type Store = { cart: CartLine[]; add: (product: Product, size?: string) => void; setQuantity: (id: string, size: string|undefined, quantity: number) => void; remove: (id: string, size?: string) => void; clear: () => void; count: number };
const Context = createContext<Store|null>(null);
export function StoreProvider({children}:{children:React.ReactNode}) {
 const [cart,setCart]=useState<CartLine[]>([]); const [ready,setReady]=useState(false);
 useEffect(()=>{try{const saved=localStorage.getItem('jbr-cart');if(saved)setCart(JSON.parse(saved));}catch{}setReady(true)},[]);
 useEffect(()=>{if(ready)localStorage.setItem('jbr-cart',JSON.stringify(cart))},[cart,ready]);
 const value=useMemo<Store>(()=>({cart,add:(product,size)=>setCart(old=>{const found=old.find(x=>x.product.id===product.id&&x.size===size);return found?old.map(x=>x===found?{...x,quantity:x.quantity+1}:x):[...old,{product,size,quantity:1}]}),setQuantity:(id,size,quantity)=>setCart(old=>old.map(x=>x.product.id===id&&x.size===size?{...x,quantity}:x).filter(x=>x.quantity>0)),remove:(id,size)=>setCart(old=>old.filter(x=>!(x.product.id===id&&x.size===size))),clear:()=>setCart([]),count:cart.reduce((n,x)=>n+x.quantity,0)}),[cart]);
 return <Context.Provider value={value}>{children}</Context.Provider>
}
export function useStore(){const value=useContext(Context);if(!value)throw new Error('StoreProvider missing');return value}
