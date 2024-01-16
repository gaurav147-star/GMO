import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import "../App.css";

const UserInfoForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false); // Added state for alert
  const navigate = useNavigate();

  const handleSubmit = (): void => {
    if (name && phoneNumber && email) {
      const userData = { name, phoneNumber, email };
      localStorage.setItem("userData", JSON.stringify(userData));

      setShowAlert(true); // Show the success alert

      setTimeout(() => {
        navigate("/data");
      }, 2000);
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Enter Your Details</h2>
        <TextField
          className="input-field"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          className="input-field"
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
        />
        <TextField
          className="input-field"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <Button
          className="submit-button"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>

        {showAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="success">
              This is a filled success Alert.
            </Alert>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default UserInfoForm;
