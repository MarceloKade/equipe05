import { useState } from "react";

export function useToggle(initialValue = false) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);

  const handleBurguerClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleModalFormOpen = () => {
    setIsModalFormOpen(true);
  };

  const handleModalFormClose = () => {
    setIsModalFormOpen(false);
  };

  return {
    isSidebarOpen,
    handleBurguerClick,
    handleSidebarClose,
    isModalFormOpen,
    handleModalFormOpen,
    handleModalFormClose,
  };
}
