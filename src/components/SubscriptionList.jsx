import React from "react";
import SubscriptionCard from "./SubscriptionCard";

export default function SubscriptionList({ plans, billing }) {
  return (
    <div className="container">
      {plans.map(p => (
        <SubscriptionCard key={p.id} plan={p} billing={billing} />
      ))}
    </div>
  );
}