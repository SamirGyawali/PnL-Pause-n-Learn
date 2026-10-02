import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import Button from "../atoms/button";
import { MoveLeft, MoveRight } from "lucide-react";
import NewsItem from "../molecules/NewsItem";
import { cn } from "../../lib/utils";

const NewsGridContext = createContext();
const ITEMS_PER_PAGE = 3;

const NewsGrid = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // to track how much should i allow the next / previous buttons clicking

  return (
    <>
      <NewsGridContext.Provider value={{ currentIndex, setCurrentIndex }}>
        <div className="news-grid-container max-w-screen">{children}</div>
      </NewsGridContext.Provider>
    </>
  );
};

NewsGrid.Cards = ({ data }) => {
  const { currentIndex } = useContext(NewsGridContext);

  return (
    <motion.div className="window mt-4 flex w-full overflow-x-hidden gap-2 rounded-2xl">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="flex gap-2"
          animate={{
            x: `calc(-${currentIndex * 305.33}% - ${currentIndex * 36}px)`,
          }}
          transition={{ ease: "circInOut", duration: 2, delay: index * 0.05 }}
        >
          <NewsItem key={index} data={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

NewsGrid.Controls = ({ data }) => {
  const { currentIndex, setCurrentIndex } = useContext(NewsGridContext);

  const maxIndex = Math.max(0, Math.ceil(data.length / ITEMS_PER_PAGE) - 1);
  const isAtStart = currentIndex <= 0;
  const isAtEnd = currentIndex >= maxIndex;

  return (
    <div className="flex gap-2 flex-row-reverse">
      <Button
        disabled={isAtEnd}
        onClick={() => {
          if (!isAtEnd) {
            setCurrentIndex((prev) => prev + 1);
          }
        }}
        icon={<MoveRight size={21} />}
        className={cn(isAtEnd && "opacity-40 cursor-not-allowed")}
      />
      <Button
      disabled={isAtStart}
        onClick={() => {
          if (!isAtStart) {
            setCurrentIndex((prev) => prev - 1);
          }
        }}
        icon={<MoveLeft size={21} />}
        className={cn(isAtStart && "opacity-40 cursor-not-allowed")}
      />
    </div>
  );
};

export default NewsGrid;
