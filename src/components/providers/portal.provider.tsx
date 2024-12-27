"use client";
import React from "react";
import { createPortal } from "react-dom";

const PortalContext = React.createContext({
  closeNode: () => {},
  insertNode: (node: React.ReactNode) => console.log(node),
});

export function usePortalContext() {
  return React.useContext(PortalContext);
}

export default function PortalProvider(properties: React.PropsWithChildren) {
  const [portal, setPortal] = React.useState<React.ReactNode>();

  const closeNode = () => setPortal(undefined);
  const insertNode = (node: React.ReactNode) => setPortal(node);

  return (
    <PortalContext.Provider value={{ closeNode, insertNode }}>
      {properties.children}
      {portal && createPortal(portal, document.querySelector("#portal")!)}
    </PortalContext.Provider>
  );
}
