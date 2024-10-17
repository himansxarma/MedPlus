import React, { useState } from "react";

function Prescription() {
  const [symptoms, setSymptoms] = useState("");
  const [duration, setDuration] = useState("");
  const [diagnosis, setDiagnosis] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic logic for diagnosis based on symptoms and duration
    let result = "We couldn't identify the condition. Please consult a doctor.";
    if (symptoms.toLowerCase().includes("fever") && duration === "short") {
      result = "It might be a cold or mild infection.";
    } else if (
      symptoms.toLowerCase().includes("vomiting") ||
      symptoms.toLowerCase().includes("diarrhea")
    ) {
      result = "It might be food poisoning.";
    } else if (
      symptoms.toLowerCase().includes("fever") &&
      duration === "long" &&
      symptoms.toLowerCase().includes("body ache")
    ) {
      result = "It might be influenza.";
    } else if (symptoms.toLowerCase().includes("sore throat") && duration === "long") {
      result = "It might be an infection.";
    }

    setDiagnosis(result);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Symptom Checker</h2>
      <p>Enter your symptoms and how long they have been occurring.</p>

      <button onClick={toggleModal} style={styles.openModalButton}>
        Open Symptom Checker
      </button>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3>Symptom Checker</h3>
            <form onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <label>Symptoms:</label>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="e.g. fever, sore throat, etc."
                  style={styles.textArea}
                />
              </div>
              <div style={styles.inputGroup}>
                <label>Duration:</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  style={styles.selectInput}
                >
                  <option value="">--Select--</option>
                  <option value="short">Short (1-3 days)</option>
                  <option value="long">Long (4+ days)</option>
                </select>
              </div>
              <button type="submit" style={styles.submitButton}>
                Check Diagnosis
              </button>
            </form>
            {diagnosis && <p style={styles.result}>{diagnosis}</p>}
            <button onClick={toggleModal} style={styles.closeModalButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: "20px",
    textAlign: "left",
  },
  textArea: {
    width: "100%",
    height: "80px",
    padding: "10px",
  },
  selectInput: {
    width: "100%",
    padding: "10px",
  },
  submitButton: {
    backgroundColor: "#339989",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  closeModalButton: {
    backgroundColor: "#d9534f",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    marginTop: "10px",
    cursor: "pointer",
  },
  openModalButton: {
    backgroundColor: "#339989",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    fontWeight: "bold",
  },
};

export default Prescription;
