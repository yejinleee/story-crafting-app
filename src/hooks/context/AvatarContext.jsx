import { createContext, useContext } from 'react';

export const AvatarContext = createContext(null);

export const useAvatarContext = () => {return useContext(AvatarContext)};