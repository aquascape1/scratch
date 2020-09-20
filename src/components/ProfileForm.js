import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { CardElement, injectStripe } from "react-stripe-elements";
import LoaderButton from "./LoaderButton";
import { useFormFields } from "../libs/hooksLib";

function ProfileForm({isLoading, onSubmit, email, personName, company}) {
  const [fields, handleFieldChange] = useFormFields({
    personName: "",
    company: ""
  });

  function validateProfileForm() {
    return (
      fields.personName !== "" &&
      fields.company !== ""
    );
  }

  async function handleSubmitClick(event) {
    event.preventDefault();

    onSubmit(fields.personName, fields.company);
  }

  return (
    <form className="ProfileForm" onSubmit={handleSubmitClick} >
      <FormGroup  bsSize="large" controlId="email">
        <ControlLabel>Email</ControlLabel>
        <FormControl
          value={email}
          readOnly
        />
      </FormGroup>
        <FormGroup bsSize="large" controlId="personName">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={fields.personName}
            onChange={handleFieldChange}
            placeholder={personName}
          />
        </FormGroup>
        <FormGroup bsSize="large" controlId="company">
          <ControlLabel>Company</ControlLabel>
          <FormControl
            type="text"
            value={fields.company}
            onChange={handleFieldChange}
            placeholder={company}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateProfileForm()}
        >
        Set Profile
      </LoaderButton>
    </form>
  );
}

export default ProfileForm;
