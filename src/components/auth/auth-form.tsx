"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // If you have sonner installed

export function AuthForm({ type }: { type: "signin" | "signup" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = type === "signin" ? "/api/signin" : "/api/signup";
      
      console.log("Sending request to:", endpoint); // Debug log
      console.log("With data:", { email, password }); // Debug log
      
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response:", data); // Debug log

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Show success message
      toast.success(type === "signin" ? "Signed in successfully!" : "Account created successfully!");
      router.push("/dashboard");
      
    } catch (err: unknown) {
      // Show error message
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      toast.error(errorMessage);
      console.error("Error:", err); // Debug log
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 border rounded "
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? "Loading..." : type === "signin" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}