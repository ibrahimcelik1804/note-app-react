import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  //console.log(note);
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4>
        {/* burada slice yerine substr kullanılabilir */}
        {note.title.length > 30 ? note.title.slice(0, 30) + "..." : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
