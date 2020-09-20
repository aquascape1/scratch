import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import App from "../components/dataTable";
import "./Home.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
  // const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const tableData = await loadTable();
        setTableData(tableData);
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  // function loadNotes() {
  //   return API.get("notes", "/notes");
  // }

  function loadTable(): Promise<string> {
      return API.get("notes", "/users/getAllUsers");
    }

  function renderLander() {
    return (
      <div className="lander">
        <h1>CCB</h1>
        <p>Effective Networking</p>
      </div>
    );
  }

  // function renderNotes() {
  //   return (
  //     <div className="notes">
  //       <PageHeader>Your Notes</PageHeader>
  //       <ListGroup>
  //         {!isLoading && renderNotesList(notes)}
  //       </ListGroup>
  //     </div>
  //   );
  // }

  function renderTable() {
    return (
      <div className="Home">
        <App tableData={tableData}/>
      </div>
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? renderTable() : renderLander()}
    </div>
  );
}
