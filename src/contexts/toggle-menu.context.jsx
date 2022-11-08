import { createContext, useState } from "react";

export const ToggleMenuContext = createContext({
    isMenuOpen: false,
    setIsMenuOpen: () => false,
})

export const ToggleMenuProvider = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const value = {isMenuOpen, setIsMenuOpen};
    

    return <ToggleMenuContext.Provider value={value}>{children}</ToggleMenuContext.Provider>
}
