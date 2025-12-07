import React, { useState } from "react";
import Button from "../atoms/button";
import { GalleryVerticalEnd, X } from "lucide-react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";
import danceVideo from "../../assets/dance02.mp4";
// import hosanaVideo from "../../assets/hosana.mp4";

import useReadmore from "../../hooks/useReadmore";
import GalleryCrousalOverlay from "./GalleryCrousalOverlay";
import { motion } from "framer-motion";

const blurOverlayVariant = {
  initial: { opacity: 0, filter: "blur(30px)" },
  final: { opacity: 1, filter: "blur(0px)" },
};

const whiteContainerVariant = {
  initial: { opacity: 0, scale: 0.95 },
  final: { opacity: 1, scale: 1 },
};

const FeaturedWorkOverlay = ({ onClose, selectedWork }) => {
  const {
    isOpen,
    setIsOpen,
    paragraphStyles,
    paragraphRef,
    showReadmoreButton,
  } = useReadmore();

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  return (
    <motion.div
      className="fixed inset-0 bg-[rgba(1,1,1,.4)] backdrop-blur-[20px] w-screen md:p-2 flex items-end md:items-center justify-center z-100"
      variants={blurOverlayVariant}
      initial="initial"
      animate="final"
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className="w-full h-[95dvh] max-w-[160vh] bg-[rgb(255,255,255)] rounded-2xl p-3 backdrop-blur-[20px] md:h-[92%]"
        variants={whiteContainerVariant}
        initial="initial"
        animate="final"
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div
            className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden custom-scroll"
            data-lenis-prevent
          >
            <div className="buttons sticky top-0 z-10 flex gap-4 justify-start bg-white p-2">
              <Button icon={<X strokeWidth="0.9" />} onClick={onClose} />
              <Button
                label="GALLERY"
                icon={<GalleryVerticalEnd strokeWidth="0.9" fill="#424242" />}
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              />
            </div>
            <span className="title text-3xl font-inter-light tracking-wide">
              {selectedWork.title}
            </span>
            <div className="meta-data flex flex-col text-neutral-400/90 text-sm font-ibm-mono-semibold">
              <span>Arunachala, India</span>
              <span>Classical Dance</span>
              <span>2024</span>
            </div>
            <div className="descriptions flex flex-col gap-4 items-start">
              <p
                className="whitespace-pre-line font-inter-regular text-neutral-700"
                style={isOpen ? null : paragraphStyles}
                ref={paragraphRef}
              >
                The divine dance of Shri Vishnu and Shri Lakshmi symbolizes
                perfect balance Vishnu's steadiness and Lakshmi's graceful
                movement working together to sustain the universe. It's a
                gentle, celestial līlā, showing how order and prosperity remain
                in harmony.
                <br /> <br />
                In temple art and classical dance, they appear in poised,
                flowing forms that express unity and serenity. Their dance
                reminds us that life stays steady and auspicious when strong and
                gentle energies move together in rhythm. The imagery of their
                dance often appears in sculptures and classical choreography,
                where Vishnu stands firm while Lakshmi mirrors his rhythm with
                soft, flowing gestures. This contrast is intentional showing how
                the universe needs both stability and gentle motion to remain
                whole.
                <br /> Many Vaishnava traditions describe this dance as a quiet
                celebration of unity. Instead of dramatic steps, it carries a
                serene, almost meditative quality, reflecting the calm presence
                of Vishnu and the soothing grace of Lakshmi.
                <br /> <br />
                Artists and dancers often interpret this moment as a lesson for
                life: when the mind stays steady like Vishnu and the heart stays
                open and graceful like Lakshmi, inner harmony naturally arises.
                Their dance becomes a metaphor for living wisely strong,
                peaceful, and beautifully balanced.
              </p>
              {showReadmoreButton ? (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-[13px] font-ibm-mono-semibold text-neutral-400 cursor-pointer group"
                >
                  <span className="relative overflow-hidden inline-block">
                    {/* Top text (initial state) */}
                    <span className="block translate-y-0 group-hover:-translate-y-full transition duration-500 ease-in-out">
                      {isOpen ? `READ LESS —` : `READ MORE +`}
                    </span>
                    {/* Bottom text (slides into place) */}
                    <span className="block absolute left-0 top-0 translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
                      {isOpen ? `READ LESS —` : `READ MORE +`}
                    </span>
                  </span>
                </button>
              ) : null}
            </div>
          </div>
          {/* images div below */}
          <div
            className="images-videos rounded-2xl overflow-y-scroll overflow-x-hidden cursor-pointer flex flex-col sm:col-span-2 gap-5"
            data-lenis-prevent
          >
            <video
              controls
              loop
              autoPlay
              muted
              src={danceVideo}
              alt="video"
              className=" object-cover rounded-2xl"
            />
            <img
              src={slide2}
              alt="image"
              className="object-cover rounded-2xl"
            />
            {/* <video
              controls
              loop
              autoPlay
              muted
              src={hosanaVideo}
              alt="hosana"
              className=" object-cover rounded-2xl"
            /> */}
            <img
              src={slide11}
              alt="image"
              className="object-cover rounded-2xl"
            />
            <img
              src={slide1}
              alt="image"
              className=" object-cover rounded-2xl"
            />
            <img
              src={slide2}
              alt="image"
              className="object-cover rounded-2xl"
            />
            <img
              src={slide3}
              alt="image"
              className="object-cover rounded-2xl"
            />
            <img
              src={slide1}
              alt="image"
              className="object-cover rounded-2xl"
            />{" "}
            <img
              src={slide1}
              alt="image"
              className=" object-cover rounded-2xl"
            />
            <img
              src={slide2}
              alt="image"
              className="object-cover rounded-2xl"
            />
            <img
              src={slide3}
              alt="image"
              className="object-cover rounded-2xl"
            />
            <img
              src={slide1}
              alt="image"
              className="object-cover rounded-2xl"
            />{" "}
            <img
              src={slide1}
              alt="image"
              className=" object-cover rounded-2xl"
            />
            <img
              src={slide2}
              alt="image"
              className="object-cover rounded-2xl"
            />
            <img
              src={slide3}
              alt="image"
              className="object-cover rounded-2xl"
            />
            <img
              src={slide1}
              alt="image"
              className="object-cover rounded-2xl"
            />{" "}
            <img
              src={slide1}
              alt="image"
              className=" object-cover rounded-2xl"
            />
            <img
              src={slide2}
              alt="image"
              className="object-cover rounded-2xl"
            />
            <img
              src={slide3}
              alt="image"
              className="object-cover rounded-2xl"
            />
            <img
              src={slide1}
              alt="image"
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </motion.div>

      {isGalleryOpen ? (
        // wer'r`e passing the function at onClose props
        <GalleryCrousalOverlay
          onClose={() => setIsGalleryOpen(!isGalleryOpen)}
        />
      ) : null}
    </motion.div>
  );
};

export default FeaturedWorkOverlay;
