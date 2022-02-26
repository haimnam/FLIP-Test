import React, { createContext, useState, useContext } from "react";

export const LanguageSettingContext = createContext({lang: "ko", selectKo: () => {}, selectEn: () => {}});

export const useLang = () => {
    const { lang } = useContext(LanguageSettingContext);
    return lang;
}

export const useSelectKo = () => {
    const { selectKo } = useContext(LanguageSettingContext);
    return selectKo;
}

export const useSelectEn = () => {
    const { selectEn } = useContext(LanguageSettingContext);
    return selectEn;
}

const LanguageContext = ({ children }) => {
    const selectKo = () => {
        setLanguage(prevState => {
            return {
                ...prevState,
                lang: "ko"
            }
        });
    }
    const selectEn = () => {
        setLanguage(prevState => {
            return {
                ...prevState,
                lang: "en"
            }
        });
    }
    const [language, setLanguage] = useState({lang: "ko", selectKo, selectEn});
    return (
        <LanguageSettingContext.Provider value={language}>
            {children}
        </LanguageSettingContext.Provider>
    );
};

export default LanguageContext;