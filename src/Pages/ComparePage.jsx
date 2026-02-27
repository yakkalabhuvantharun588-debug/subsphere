import React, { useContext } from "react";
import { SubscriptionContext } from "../context/SubscriptionContext";

export default function ComparePage({ plans }) {

  const { selectedPlan } = useContext(SubscriptionContext);

  return (
    <div className="compare-container">

      <div className="compare-table">

        {/* HEADER ROW */}

        <div className="compare-header-row">

          <div className="compare-header-cell">
            Feature
          </div>

          {plans.map(p => (
            <div
              key={p.id}
              className={`compare-header-cell ${
                selectedPlan === p.name ? "compare-active" : ""
              }`}
            >
              {p.name}

              {/* ACTIVE INDICATOR */}
              {selectedPlan === p.name && (
                <div className="active-badge">
                  ✅ Active
                </div>
              )}

            </div>
          ))}

        </div>

        {/* MONTHLY PRICE */}

        <div className="compare-row">
          <div className="compare-cell compare-feature">
            Monthly Price
          </div>

          {plans.map(p => (
            <div
              key={p.id}
              className={`compare-cell ${
                selectedPlan === p.name ? "compare-active" : ""
              }`}
            >
              ₹{p.monthly}
            </div>
          ))}
        </div>

        {/* YEARLY PRICE */}

        <div className="compare-row">
          <div className="compare-cell compare-feature">
            Yearly Price
          </div>

          {plans.map(p => (
            <div
              key={p.id}
              className={`compare-cell ${
                selectedPlan === p.name ? "compare-active" : ""
              }`}
            >
              ₹{p.yearly}
            </div>
          ))}
        </div>

        {/* BENEFITS */}

        {plans[0].benefits.map((_, index) => (

          <div className="compare-row" key={index}>

            <div className="compare-cell compare-feature">
              Feature {index + 1}
            </div>

            {plans.map(p => (
              <div
                key={p.id}
                className={`compare-cell ${
                  selectedPlan === p.name ? "compare-active" : ""
                }`}
              >
                {p.benefits[index]}
              </div>
            ))}

          </div>

        ))}

      </div>

    </div>
  );
}