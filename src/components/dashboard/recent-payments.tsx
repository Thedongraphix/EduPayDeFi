"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentPayments = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    amount: 499.99,
    status: "completed",
    date: "2024-03-20",
    course: "Advanced Mathematics"
  },
  {
    id: "2", 
    name: "Michael Chen",
    email: "m.chen@example.com",
    amount: 299.99,
    status: "pending",
    date: "2024-03-19",
    course: "Computer Science 101"
  },
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma.w@example.com", 
    amount: 699.99,
    status: "completed",
    date: "2024-03-18",
    course: "Business Analytics"
  }
];

export function RecentPayments() {
  return (
    <div className="space-y-8">
      {recentPayments.map((payment) => (
        <div key={payment.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${payment.email}`} alt={payment.name} />
            <AvatarFallback>
              {payment.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{payment.name}</p>
            <p className="text-xs text-muted-foreground">{payment.course}</p>
          </div>
          <div className="ml-auto font-medium">
            <div className={payment.status === "pending" ? "text-yellow-500" : "text-green-500"}>
              ${payment.amount}
            </div>
            <div className="text-xs text-muted-foreground">
              {new Date(payment.date).toLocaleDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}