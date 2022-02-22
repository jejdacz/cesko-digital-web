import {createContext, useContext} from 'react';

export const StringsContext = createContext();
export const useStrings = () => useContext(StringsContext);
export default useStrings;

