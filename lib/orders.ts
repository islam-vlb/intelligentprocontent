const PREFIX = "ipca_";
const ORDERS_KEY = `${PREFIX}orders`;
const PENDING_KEY = `${PREFIX}pending_order`;

export type OrderItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
  downloadFile: string | null;
};

export type Order = {
  orderId: string;
  date: string;
  items: OrderItem[];
  total: number;
};

type OrdersStore = Record<string, Order[]>;

function readStore(): OrdersStore {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStore(store: OrdersStore) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(store));
}

export function getOrders(email: string): Order[] {
  const store = readStore();
  return store[email.trim().toLowerCase()] ?? [];
}

export function addOrder(email: string, items: OrderItem[], total: number): Order {
  const store = readStore();
  const key = email.trim().toLowerCase();
  const order: Order = {
    orderId: `ORD-${Date.now().toString(36).toUpperCase()}`,
    date: new Date().toISOString(),
    items,
    total,
  };
  store[key] = [order, ...(store[key] ?? [])];
  writeStore(store);
  return order;
}

export function savePendingOrder(items: OrderItem[], total: number) {
  try {
    sessionStorage.setItem(PENDING_KEY, JSON.stringify({ items, total }));
  } catch {}
}

export function takePendingOrder(): { items: OrderItem[]; total: number } | null {
  try {
    const raw = sessionStorage.getItem(PENDING_KEY);
    if (!raw) return null;
    sessionStorage.removeItem(PENDING_KEY);
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
