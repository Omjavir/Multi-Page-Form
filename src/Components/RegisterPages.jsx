import React from "react";

export const Page1 = ({ formData, handleFormChange }) => {
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName || ""}
        onChange={handleFormChange}
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName || ""}
        onChange={handleFormChange}
      />
    </div>
  );
};

export const Page2 = ({ formData, handleFormChange }) => {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email || ""}
        onChange={handleFormChange}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password || ""}
        onChange={handleFormChange}
      />
    </div>
  );
};

export const Page3 = ({ formData, handleFormChange }) => {
  return (
    <div>
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address || ""}
        onChange={handleFormChange}
      />
      <br />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city || ""}
        onChange={handleFormChange}
      />
      <br />
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        name="state"
        value={formData.state || ""}
        onChange={handleFormChange}
      />
      <br />
      <label htmlFor="zip">Zip Code</label>
      <input
        type="text"
        id="zip"
        name="zip"
        value={formData.zip || ""}
        onChange={handleFormChange}
      />
    </div>
  );
};
