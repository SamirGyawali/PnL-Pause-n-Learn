import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import Button from "../atoms/button";
import { MoveLeft, MoveRight } from "lucide-react";
import NewsItem from "../molecules/NewsItem";

const NewsGridContext = createContext();

const NewsGrid = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <NewsGridContext.Provider value={{ currentIndex, setCurrentIndex }}>
        <div className="news-grid-container">{children}</div>
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

  return (
    <div className="flex gap-2 flex-row-reverse">
      <Button
        onClick={() => {
          if (currentIndex < data.length / 3) {
            // replace data with pagination from backend
            setCurrentIndex((prev) => prev + 1);
          }
        }}
        icon={<MoveRight size={21} />}
      />
      <Button
        onClick={() => {
          if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
          }
        }} // here, need to make the state not be able to reduce below 0
        icon={<MoveLeft size={21} />}
      />
    </div>
  );
};

export default NewsGrid;
