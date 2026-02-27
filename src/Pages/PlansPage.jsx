import React, { useContext } from "react";
import { SubscriptionContext } from "../context/SubscriptionContext";
import SubscriptionCard from "../components/SubscriptionCard";

export default function PlansPage({ plans }) {

  const { billing, setBilling } = useContext(SubscriptionContext);

  return (
    <div>

      <h2>Select a Plan</h2>

      {/* Billing Toggle */}
      <div>
        <button onClick={() => setBilling("monthly")}>
          Monthly
        </button>

        <button onClick={() => setBilling("yearly")}>
          Yearly
        </button>
      </div>

      {/* Plans */}
      <div className="container">
        {plans.map(plan => (
          <SubscriptionCard
            key={plan.id}
            plan={plan}
            billing={billing}
          />
        ))}
      </div>

    </div>
  );
}