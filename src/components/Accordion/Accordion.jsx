import { createContext, useContext, useState } from 'react';
import AccordionItem from './AccordionItem';

const AccordionContext = createContext({
  openItemId: null,
  toggleItem: (id) => {},
});

// custom hook
export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  // if context is undefined
  // if we're unable to connect to that context because the wrapping Provider
  // is missing
  if (!ctx) {
    throw new Error(
      'Accordion-related components must be wrapped by <Accordion>.',
    );
  }

  return ctx;
}

// This will act as the Context Provider now
export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  // refactor openItem, closeItem to one fn
  function toggleItem(id) {
    // Updating state based on the old state so using the function form
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
