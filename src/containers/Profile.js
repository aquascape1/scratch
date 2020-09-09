import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { Elements, StripeProvider } from "react-stripe-elements";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ProfileForm from "../components/ProfileForm.js";
import { onError } from "../libs/errorLib";
import config from "../config";
import "./Profile.css";

export default function Profile() {
  const history = useHistory();
  const [notes, setNotes] = useState([]);
  const [email, setEmail] = useState("");
  const [personName, setPersonName] = useState("");
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function onLoad() {
      try {
        const profile = await loadProfile();
        const { email, personName, company } = profile;
        setEmail(email);
        setPersonName(personName);
        setCompany(company);
      } catch (e) {
        onError(e);
      }
    // setIsLoading(false);
    }
    onLoad();
  }, []);

  function loadProfile() {
    return API.get("notes", `/users`);
  }

  function updateProfile(personName, company) {
    return API.put("notes", "/users", {
      body: {personName, company}
    });
  }

  async function handleFormSubmit(personName, company) {
    setIsLoading(true);

    try {
      //missing api call
      updateProfile(personName,company);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="Profile">
    <ProfileForm isLoading={isLoading} onSubmit={handleFormSubmit} email={email}
    personName={personName} company={company}/>
    </div>
  );
}
