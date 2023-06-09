import React from 'react';
import UpdateModal from '../updateModal/UpdateModal';


const customStyles = {
  position: "absolute",
  top: "-40px",
  left: "43%",
  height: "80px",
  width: "80px",
};

const NoteCard = ({ note, isReload, setIsReload, handleDelete}) => {


  return (
    <div className="col mt-5" style={{ position: "relative" }}>
      <div className="rounded h-100 color-060930 note-card">
      <div
          className=" bg-warning  rounded-circle mx-auto mt-2"
          style={customStyles}
        >
          <p className="text-center p-2  fs-2 fw-bold text-dark">A</p>
        </div>
        <div className="card-body mt-5">
          <h5 className="card-title">Author : {note.userName}</h5>
          <p className="card-text">{note.textData}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <div>
            <button
              className="color-801336 btn btn-sm mx-2 " 
              onClick={() => handleDelete(note._id)}
              
            >
              delete
            </button>
          </div>
          {/* <button>update</button> */}
            <UpdateModal setIsReload={setIsReload} isReload={isReload} id={note._id}/>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;