import React, { createContext, useState } from "react";

export const NoteContext = createContext({noteLanguage: "English", clickLeft: () => {}, clickRight: () => {}});

const FlipNoteContext = ({ children }) => {
    const clickLeft = () => {
        setNoteLanguage(prevState => {
            return {
                ...prevState,
                noteLanguage: "Korean"
            }
        });
    }
    const clickRight = () => {
        setNoteLanguage(prevState => {
            return {
                ...prevState,
                noteLanguage: "English"
            }
        });
    }
    const [noteLanguage, setNoteLanguage] = useState({noteLanguage: "English", clickLeft, clickRight});
    return (
        <NoteContext.Provider value={noteLanguage}>{children}</NoteContext.Provider>
    );
};

export default FlipNoteContext;