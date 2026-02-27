import React, { useContext } from "react";
import { SubscriptionContext } from "../context/SubscriptionContext";

export default function Summary({ plans, billing }) {

  const { selectedPlan } = useContext(SubscriptionContext);

  const plan = plans.find(p => p.name === selectedPlan);

  if(!plan) return null;

  const total = billing === "monthly" ? plan.monthly : plan.yearly;

  return (
    <div className="summary">
      <h3>Active Plan: {plan.name}</h3>
      <p>Billing: {billing}</p>
      <p>Total: ₹{total}</p>
    </div>
  );
}