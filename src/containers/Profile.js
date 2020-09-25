import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { Elements, StripeProvider } from "react-stripe-elements";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ProfileForm from "../components/ProfileForm.js";
import { onError } from "../libs/errorLib";
import config from "../config";
import "./Profile.css";
import Calendar from "../components/Calendar";

export default function Profile() {
  const history = useHistory();
  const [notes, setNotes] = useState([]);
  const [email, setEmail] = useState("");
  const [personName, setPersonName] = useState("");
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [calendar, setCalendar] = useState([]);
  const [calIsLoading, setCalIsLoading] = useState(false);
  const [calLoad, setCalLoad] = useState(false);

  useEffect(() => {
    async function onLoad() {
      try {
        setCalLoad(true);
        const profile = await loadProfile();
        const { email, personName, company } = profile;
        setEmail(email);
        setPersonName(personName);
        setCompany(company);
        // console.log(company);
        const profileCalendar = await loadCalendar();
        console.log("loading Calendar");
        // while(profileCalendar.length==0){
        //   console.log("looping");
        // }
        setCalendar(profileCalendar.calendar);
        // console.log(calendar);
        // console.log(profileCalendar);
        setCalLoad(false);
      } catch (e) {
        onError(e);
      }
    // setIsLoading(false);
    }
    onLoad();
  }, []);

  function loadCalendar() {
    return API.get("notes", "/calendar");
  }

  function loadProfile() {
    return API.get("notes", `/users`);
  }

  function updateProfile(personName, company) {
    return API.put("notes", "/users", {
      body: {personName, company}
    });
  }

  function updateCalendar(calendar) {
    return API.put("notes", "/calendar", {
      body: {calendar}
    });
  }

  async function handleFormSubmit(personName, company) {
    setIsLoading(true);
    try {
      updateProfile(personName,company);
      setIsLoading(false);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  async function handleSubmitCalendar(calendar) {
    setCalIsLoading(true);
    try {
      updateCalendar(calendar);
      setCalendar(calendar);
      setCalIsLoading(false);
      console.log("handleSubmitCalendar");
    }
    catch (e) {
      onError(e);
      setCalIsLoading(false);
    }
  }

  return (
    <div className="ProfileContainer">
      <div className="Profile">
      <ProfileForm isLoading={isLoading} onSubmit={handleFormSubmit} email={email}
      personName={personName} company={company}/>
      </div>
      <div className="Calendar">
      <Calendar calendar={calendar} handleSubmitCalendar={handleSubmitCalendar} calLoad={calLoad} calIsLoading={calIsLoading}/>
      </div>
    </div>
  );
}
