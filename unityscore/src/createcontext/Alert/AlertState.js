import React, { useState } from "react";
import Alertcontext from "./AlertContext";

function Alertstate(props) {
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);

  const showalert = (alert) => {
    const { grole, gmsg, gshow } = alert;
    setRole(grole);
    setMsg(gmsg);
    setShow(gshow);

    // Automatically hide the alert after 1 second
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  return (
    <Alertcontext.Provider value={{ showalert }}>
      {show && (
        <div className={`alert alert-${role} alert-dismissible`} role="alert">
          {msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      {props.children}
    </Alertcontext.Provider>
  );
}

export default Alertstate;
