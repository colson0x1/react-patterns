import { createContext, useContext, useState } from 'react';

const AccordionContext = createContext({
  openItemId: null,
  openItem: (id) => {},
  closeItem: () => {},
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

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}
