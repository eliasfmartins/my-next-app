import { createContext, useState } from 'react';

export const SearchContext = createContext({});
const [search, setSearch] = useState<boolean>(false);

<SearchContext.Provider value={{ search, setSearch }}>
{...children}
</SearchContext.Provider>;
