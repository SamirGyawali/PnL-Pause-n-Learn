import React from "react";
import Button from "../atoms/button";
import { GalleryVerticalEnd, X } from "lucide-react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";
import danceVideo from "../../assets/dance02.mp4";

const FeaturedWorkOverlay = ({ onClose, selectedWork }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(1,1,1,.4)] backdrop-blur-[20px] w-screen md:p-2 flex items-end md:items-center justify-center z-100">
      <div className="w-full h-[95dvh] max-w-[160vh] bg-[rgb(255,255,255)] rounded-2xl p-3 backdrop-blur-[20px] md:h-[92%]">
        <div className="w-full h-full grid grid-cols-3 gap-10">
          <div
            className="flex flex-col gap-10 overflow-y-scroll overflow-x-hidden custom-scroll"
            data-lenis-prevent
          >
            <div className="buttons sticky top-0 z-10 flex gap-4 justify-start bg-white p-2">
              <Button icon={<X strokeWidth="0.9" />} onClick={onClose} />
              <Button
                label="GALLERY"
                icon={<GalleryVerticalEnd strokeWidth="0.9" fill="#424242" />}
              />
            </div>
            <span className="title text-3xl font-inter-light tracking-wide">
              {selectedWork.title}
            </span>
            <div className="meta-data flex flex-col text-neutral-500/90 text-sm font-ibm-mono-regular">
              <span>Arunachala, India</span>
              <span>Adaptive Reuse</span>
              <span>2019-2024</span>
            </div>
            <div className="descriptions flex flex-col gap-3 pr-2">
              <span>
                The divine dance of Shri Vishnu and Shri Lakshmi symbolizes
                perfect balance—Vishnu's steadiness and Lakshmi's graceful
                movement working together to sustain the universe. It's a
                gentle, celestial līlā, showing how order and prosperity remain
                in harmony.
              </span>
              <span>
                In temple art and classical dance, they appear in poised,
                flowing forms that express unity and serenity. Their dance
                reminds us that life stays steady and auspicious when strong and
                gentle energies move together in rhythm.
              </span>
              <span>
                The imagery of their dance often appears in sculptures and
                classical choreography, where Vishnu stands firm while Lakshmi
                mirrors his rhythm with soft, flowing gestures. This contrast is
                intentional—showing how the universe needs both stability and
                gentle motion to remain whole.
                <br /> Many Vaishnava traditions describe this dance as a quiet
                celebration of unity. Instead of dramatic steps, it carries a
                serene, almost meditative quality, reflecting the calm presence
                of Vishnu and the soothing grace of Lakshmi.
              </span>
              <span>
                Artists and dancers often interpret this moment as a lesson for
                life: when the mind stays steady like Vishnu and the heart stays
                open and graceful like Lakshmi, inner harmony naturally arises.
                Their dance becomes a metaphor for living wisely—strong,
                peaceful, and beautifully balanced.
              </span>
            </div>
          </div>
          <div
            className="images-videos rounded-2xl overflow-y-scroll overflow-x-hidden cursor-pointer flex flex-col col-span-2 gap-5"
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
            <img
              src={slide3}
              alt="image"
              className="object-cover rounded-2xl"
            />
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
      </div>
    </div>
  );
};

export default FeaturedWorkOverlay;
