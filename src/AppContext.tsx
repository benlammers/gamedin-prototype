import { createContext, useContext, useState } from 'react';

interface AppContextProps {
   showRegister: boolean;
   openRegister: () => void;
   closeRegister: () => void;

   showDiscord: boolean;
   openDiscord: () => void;
   closeDiscord: () => void;

   showEpic: boolean;
   openEpic: () => void;
   closeEpic: () => void;

   discordConnected: boolean;
   connectToDiscord: () => void;
   epicConnected: boolean;
   connectToEpic: () => void;

   vouchedPlayers: string[];
   addVouchedPlayer: (player: string) => void;
   removeVouchedPlayer: (player: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC = ({ children }) => {
   const [showRegister, setShowRegister] = useState<boolean>(false);
   const openRegister = () => setShowRegister(true);
   const closeRegister = () => setShowRegister(false);

   const [showDiscord, setShowDiscord] = useState<boolean>(false);
   const openDiscord = () => setShowDiscord(true);
   const closeDiscord = () => setShowDiscord(false);

   const [showEpic, setShowEpic] = useState<boolean>(false);
   const openEpic = () => setShowEpic(true);
   const closeEpic = () => setShowEpic(false);

   const [discordConnected, setDiscordConnected] = useState<boolean>(false);
   const connectToDiscord = () => setDiscordConnected(true);

   const [epicConnected, setEpicConnected] = useState<boolean>(false);
   const connectToEpic = () => setEpicConnected(true);

   const [vouchedPlayers, setVouchedPlayers] = useState<string[]>([]);
   const addVouchedPlayer = (player: string) => setVouchedPlayers([...vouchedPlayers, player]);
   const removeVouchedPlayer = (player: string) => setVouchedPlayers(vouchedPlayers.filter((p) => p !== player));

   return (
      <AppContext.Provider
         value={{
            showRegister,
            openRegister,
            closeRegister,
            showDiscord,
            openDiscord,
            closeDiscord,
            showEpic,
            openEpic,
            closeEpic,
            discordConnected,
            connectToDiscord,
            epicConnected,
            connectToEpic,
            vouchedPlayers,
            addVouchedPlayer,
            removeVouchedPlayer,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export const useAppContext = (): AppContextProps => {
   const context = useContext(AppContext);

   if (context === undefined) {
      throw new Error('useAppContext must be used within an AppProvider');
   }
   return context;
};
