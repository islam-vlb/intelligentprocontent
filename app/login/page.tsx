"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { addOrder, takePendingOrder } from "@/lib/orders";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isCheckout = searchParams.get("checkout") === "1";
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const result = login(email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }

    if (isCheckout) {
      const pending = takePendingOrder();
      if (pending) {
        addOrder(email, pending.items, pending.total);
      }
    }

    router.push("/dashboard");
  }

  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 py-16">
      <div className="rounded-2xl border border-primary/10 bg-surface-alt p-8 shadow-sm">
        <h1 className="font-heading text-2xl font-bold text-[#EAFFFB] mb-2">Welcome Back</h1>
        <p className="text-sm text-text-secondary mb-8">
          {isCheckout ? "Log in to access your order in your Dashboard." : "Log in to access your orders and downloads."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full min-h-[50px] rounded-xl border border-primary/10 bg-surface px-4 py-3 text-sm text-[#EAFFFB] placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />

          {error && <p className="text-sm font-semibold text-red-400">{error}</p>}

          <button
            type="submit"
            className="mt-2 min-h-[52px] w-full rounded-2xl bg-primary px-4 py-3.5 text-sm font-bold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text-secondary">
          Don&apos;t have an account?{" "}
          <Link href={isCheckout ? "/register?checkout=1" : "/register"} className="font-bold text-primary underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
