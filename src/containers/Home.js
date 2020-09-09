import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import Basic from "../components/dataTable";
import "./Home.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: 'personName',
        field: 'personName',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'personName',
        },
      },
      {
        label: 'company',
        field: 'company',
        width: 270,
      },
      {
        label: 'email',
        field: 'email',
        width: 200,
      },
    ],
    rows: [
    JSON.stringify(tableData)
    // API.get("notes", "/users/getAllUsers")
    ]
  });

  console.log(tableData);
  console.log(dataTable);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();
        setNotes(notes);
        const tableData = await loadTable();
        setTableData(tableData);

      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  function loadNotes() {
    return API.get("notes", "/notes");
  }

  function loadTable(): Promise<string> {
      return API.get("notes", "/users/getAllUsers");
    }

  function renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
        <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
          <ListGroupItem header={note.content.trim().split("\n")[0]}>
            {"Created: " + new Date(note.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/notes/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new note
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>CCB</h1>
        <p>Effective Networking</p>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          {!isLoading && renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      <PageHeader>Professionals</PageHeader>
      <Basic tableData={tableData}/>
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}
