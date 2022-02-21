import React, { createContext, useState, useContext } from "react";

export const NoteContext = createContext({noteLang: "en", clickLeft: () => {}, clickRight: () => {}});

export const useNoteLang = () => {
    const { noteLang } = useContext(NoteContext);
    return noteLang;
}

export const useClickLeft = () => {
    const { clickLeft } = useContext(NoteContext);
    return clickLeft;
}

export const useClickRight = () => {
    const { clickRight } = useContext(NoteContext);
    return clickRight;
}

const FlipNoteContext = ({ children }) => {
    const clickLeft = () => {
        setNoteLanguage(prevState => {
            return {
                ...prevState,
                noteLang: "ko"
            }
        });
    }
    const clickRight = () => {
        setNoteLanguage(prevState => {
            return {
                ...prevState,
                noteLang: "en"
            }
        });
    }
    const [noteLanguage, setNoteLanguage] = useState({noteLang: "en", clickLeft, clickRight});
    return (
        <NoteContext.Provider value={noteLanguage}>{children}</NoteContext.Provider>
    );
};

export default FlipNoteContext;