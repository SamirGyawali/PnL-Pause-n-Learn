import { useEffect, useRef, useState } from "react";

export default function useReadmore() {
  const paragraphStyles = {
    WebkitLineClamp: 15,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  const [isOpen, setIsOpen] = useState(false);
  const [showReadmoreButton, setShowReadmoreButton] = useState(false);
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (paragraphRef.current) {
      setShowReadmoreButton(
        paragraphRef.current.scrollHeight != paragraphRef.current.clientHeight
      );
    }
  }, []);

  return {
    isOpen,
    setIsOpen,
    paragraphStyles,
    paragraphRef,
    showReadmoreButton
  };
}
