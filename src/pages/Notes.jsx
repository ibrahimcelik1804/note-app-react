import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/NoteItem"
import { Link } from "react-router-dom";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        // MATCH EŞLEŞEN KISMI BULMAK İÇİN KULLANDIK
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };
  useEffect(handleSearch, [text]);
  return (
    <section className="container">
      <header className="notes__header">
        {!showSearch && <h2>Notlarım</h2>}
        {showSearch && (
          <input
            type="text"
            placeholder="Notlarımda arayın"
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}

        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <FaWindowClose /> : <FaSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length == 0 && (
          <p className="empty_notes">Not eklemek ister misiniz?</p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className="btn add__btn" to="create-note">
        <FaPlus />
      </Link>
    </section>
  );
};

export default Notes;
