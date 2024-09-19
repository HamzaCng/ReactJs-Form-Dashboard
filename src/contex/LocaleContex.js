import { createContext } from "react";

const defaultValue = {
    locale : "tr",
    setLocale: () =>{}
}

export default createContext(defaultValue);