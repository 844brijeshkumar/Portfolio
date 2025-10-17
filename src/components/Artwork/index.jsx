import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import plugins
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// Import plugin styles
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Your slides data, with a video object added
const slides = [
  // --- VIDEO OBJECT ---
  {
    type: "video",
    poster: "../artworks/video_poster.jpg", // Thumbnail for the video
    title: "My Awesome Video",
    description: "This is a description for the video.",
    sources: [
      {
        src: "../videos/my-sample-video.mp4",
        type: "video/mp4",
      },
    ],
  },
  // --- EXISTING IMAGE OBJECTS ---
  {
    src: "../artworks/2.jpg",
    title: "Aquaman",
    description:
      "A charcoal  sketch inspired by Aquaman. Focused on capturing the depth in the eyes and texture in every strand of hair and beard.",
  },
  {
    src: "../artworks/3.jpeg",
    title: "Meditation of the Warrior",
    description:
      "Created with charcoal  on paper, this portrait reflects the harmony between strength and stillness.",
  },
  // ... the rest of your images
  {
    src: "../artworks/20.jpeg",
    title: "Guardian of Nature: The Elephant and Baby",
    description:
      "A charcoal sketch of an elephant gently holding a baby in its trunk, shielding the little one from danger. The image evokes the protective spirit of nature, symbolizing strength, care, and the nurturing bond between all living beings under the watchful eye of Mother Nature.",
  },
];

const Artwork = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center px-4 pt-6 bg-[#dedede] sm:pt-6 pb-6 rounded-md cursor-pointer">
      <div>
        <div
          onClick={() => setOpen(true)}
          className="relative flex justify-center items-center"
        >
          <img
            src="../artworks/art_placeholder.jpg"
            alt="Artwork gallery placeholder"
            className="w-full h-auto blur-[2px]"
          />

          <span
            className="absolute text-black font-extrabold text-5xl sm:text-9xl hover:scale-105 transition-transform duration-300 ease-in-out"
            title="click me"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            👁️
          </span>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides} // Use the new slides array
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        />
      </div>
    </div>
  );
};

export default Artwork;