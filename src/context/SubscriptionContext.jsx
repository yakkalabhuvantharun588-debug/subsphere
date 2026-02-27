import React, { createContext, useState } from "react";

export const SubscriptionContext = createContext();

export default function SubscriptionProvider({ children }) {

  const [selectedPlan, setSelectedPlan] = useState("");
  const [billing, setBilling] = useState("monthly");
  const [loading, setLoading] = useState(false);

  const activatePlan = (planName) => {
    setLoading(true);

    setTimeout(() => {
      setSelectedPlan(planName);
      setLoading(false);
    }, 1000);
  };

  return (
    <SubscriptionContext.Provider
      value={{
        selectedPlan,
        billing,
        setBilling,
        activatePlan,
        setSelectedPlan,
        loading
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}