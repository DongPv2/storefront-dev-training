import React, { createContext, ReactNode, useState } from "react";

export interface ContextGlobalType {
  modal: boolean;
  openModal: () => void;
  colseModal: () => void;
}

export const ContextGlobal = createContext<ContextGlobalType | null>(null);

interface ContextProviderType {
  children: ReactNode;
}

const ContextProvider = (props: ContextProviderType) => {
  const { children } = props;

  const [modal, setModal] = useState<boolean>(false);

  const openModal = () => {
    setModal(true);
  };

  const colseModal = () => {
    setModal(false);
  };

  return <ContextGlobal.Provider value={{ modal, openModal, colseModal }}>{children}</ContextGlobal.Provider>;
};

export default ContextProvider;
