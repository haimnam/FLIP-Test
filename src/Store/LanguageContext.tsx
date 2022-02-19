import React, { createContext, useState } from "react";

export const LanguageSettingContext = createContext({lan: "ko", selectKo: () => {}, selectEn: () => {}});

const LanguageContext = ({ children }) => {
    const selectKo = () => {
        setLanguage(prevState => {
            return {
                ...prevState,
                lan: "ko"
            }
        });
    }
    const selectEn = () => {
        setLanguage(prevState => {
            return {
                ...prevState,
                lan: "en"
            }
        });
    }
    const [language, setLanguage] = useState({lan: "ko", selectKo, selectEn});
    return (
        <LanguageSettingContext.Provider value={language}>
            {children}
        </LanguageSettingContext.Provider>
    );
};

export default LanguageContext;