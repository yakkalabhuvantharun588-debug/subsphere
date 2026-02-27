import React, { useContext, useState } from "react";
import { SubscriptionContext } from "../context/SubscriptionContext";

export default function ActiveSubscription() {

  const {
    selectedPlan,
    billing,
    setSelectedPlan
  } = useContext(SubscriptionContext);

  const [showModal, setShowModal] = useState(false);

  if (!selectedPlan) {
    return <h3>No Active Subscription</h3>;
  }

  return (
    <>
      <div className="active-container">

        <h2>Active Subscription</h2>

        <div className="active-card">

          <h3>{selectedPlan}</h3>
          <p>Billing Type: {billing}</p>

          <button
            className="cancel-btn"
            onClick={() => setShowModal(true)}
          >
            Cancel Subscription
          </button>

        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h3>Are you sure you want to cancel?</h3>

            <div className="modal-buttons">

              <button
                onClick={() => {
                  setSelectedPlan("");
                  setShowModal(false);
                }}
              >
                Yes
              </button>

              <button onClick={() => setShowModal(false)}>
                No
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}