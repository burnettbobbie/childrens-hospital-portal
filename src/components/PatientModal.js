const PatientModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div id="patient-modal" className={showHideClassName}>
        <section >
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };

  export default PatientModal;