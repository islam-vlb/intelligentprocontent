"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { getOrders, Order } from "@/lib/orders";
import { BUSINESS } from "@/lib/config";

type Tab = "orders" | "downloads" | "support" | "settings";

const TABS: { id: Tab; label: string }[] = [
  { id: "orders", label: "My Orders" },
  { id: "downloads", label: "My Downloads" },
  { id: "support", label: "Support" },
  { id: "settings", label: "Account Settings" },
];

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading, logout, updateName } = useAuth();
  const [tab, setTab] = useState<Tab>("orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [nameInput, setNameInput] = useState("");
  const [savedMsg, setSavedMsg] = useState(false);
  const [supportMsg, setSupportMsg] = useState("");
  const [supportSent, setSupportSent] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  useEffect(() => {
    if (user) {
      setOrders(getOrders(user.email));
      setNameInput(user.name);
    }
  }, [user]);

  if (loading || !user) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center text-text-secondary">
        Loading your dashboard…
      </div>
    );
  }

  const uniqueProducts = Array.from(
    new Map(orders.flatMap((o) => o.items).map((i) => [i.id, i])).values()
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] mb-8">My Dashboard</h1>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-2xl border border-primary/10 bg-surface-alt p-4 shadow-sm h-fit">
          <div className="px-3 py-3 mb-2 border-b border-primary/10">
            <p className="text-sm font-semibold text-[#EAFFFB]">{user.name}</p>
            <p className="text-xs text-text-muted truncate">{user.email}</p>
          </div>
          <nav className="flex lg:flex-col gap-1 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`text-left whitespace-nowrap px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  tab === t.id ? "bg-primary text-bg" : "text-text-secondary hover:bg-surface"
                }`}
              >
                {t.label}
              </button>
            ))}
            <button
              onClick={() => {
                logout();
                router.push("/");
              }}
              className="text-left whitespace-nowrap px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors mt-2 lg:border-t lg:border-primary/10 lg:pt-3"
            >
              Logout
            </button>
          </nav>
        </aside>

        <div className="rounded-2xl border border-primary/10 bg-surface-alt p-6 sm:p-8 shadow-sm">
          {tab === "orders" && (
            <div>
              <h2 className="font-heading text-lg font-semibold text-[#EAFFFB] mb-6">My Orders</h2>
              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-sm text-text-secondary mb-4">You haven&apos;t placed any orders yet.</p>
                  <Link href="/shop" className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all">
                    Browse Products
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {orders.map((o) => (
                    <div key={o.orderId} className="rounded-2xl border border-primary/10 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div>
                          <p className="text-sm font-bold text-[#EAFFFB]">{o.orderId}</p>
                          <p className="text-xs text-text-muted">{new Date(o.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</p>
                        </div>
                        <p className="text-sm font-bold text-primary">${o.total.toFixed(2)}</p>
                      </div>
                      <ul className="space-y-2">
                        {o.items.map((i) => (
                          <li key={i.id} className="flex justify-between text-sm text-text-secondary">
                            <span>{i.name} × {i.qty}</span>
                            <span className="font-medium text-[#EAFFFB]">${(i.price * i.qty).toFixed(2)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === "downloads" && (
            <div>
              <h2 className="font-heading text-lg font-semibold text-[#EAFFFB] mb-6">My Downloads</h2>
              {uniqueProducts.length === 0 ? (
                <p className="text-sm text-text-secondary">No downloads yet. Your purchased products will appear here.</p>
              ) : (
                <div className="space-y-3">
                  {uniqueProducts.map((p) => (
                    <div key={p.id} className="flex items-center justify-between gap-4 rounded-2xl border border-primary/10 p-4">
                      <span className="text-sm font-medium text-[#EAFFFB]">{p.name}</span>
                      {p.downloadFile ? (
                        <a
                          href={p.downloadFile}
                          download
                          className="shrink-0 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all"
                        >
                          Download PDF
                        </a>
                      ) : (
                        <span className="shrink-0 inline-flex items-center justify-center rounded-xl bg-surface px-4 py-2 text-xs font-semibold text-text-muted">
                          Preparing — check back soon
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === "support" && (
            <div>
              <h2 className="font-heading text-lg font-semibold text-[#EAFFFB] mb-6">Support</h2>
              <div className="mb-6 rounded-2xl bg-surface p-5 text-sm text-text-secondary space-y-1">
                <p><span className="font-semibold text-[#EAFFFB]">Email:</span> {BUSINESS.email}</p>
                <p><span className="font-semibold text-[#EAFFFB]">Phone:</span> {BUSINESS.phone}</p>
              </div>
              {supportSent ? (
                <p className="text-sm font-semibold text-primary">Your message has been sent. We&apos;ll get back to you shortly.</p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSupportSent(true);
                    setSupportMsg("");
                  }}
                  className="space-y-4"
                >
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help?"
                    value={supportMsg}
                    onChange={(e) => setSupportMsg(e.target.value)}
                    className="w-full rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  <button type="submit" className="min-h-[48px] rounded-xl bg-primary px-6 py-3 text-sm font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          )}

          {tab === "settings" && (
            <div>
              <h2 className="font-heading text-lg font-semibold text-[#EAFFFB] mb-6">Account Settings</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateName(nameInput);
                  setSavedMsg(true);
                  setTimeout(() => setSavedMsg(false), 2000);
                }}
                className="space-y-4 max-w-sm"
              >
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1.5">Full Name</label>
                  <input
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full min-h-[48px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1.5">Email Address</label>
                  <input disabled value={user.email} className="w-full min-h-[48px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-text-muted" />
                </div>
                <button type="submit" className="min-h-[48px] rounded-xl bg-primary px-6 py-3 text-sm font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all">
                  Save Changes
                </button>
                {savedMsg && <p className="text-sm font-semibold text-primary">Saved.</p>}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
