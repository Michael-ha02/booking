import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cdn.vox-cdn.com/thumbor/7Uk_gQikpw0skKSgi0NRjPGj0z8=/0x0:1800x1200/1820x1213/filters:focal(853x406:1141x694):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59058095/Web_09.0.jpg",
    },
    {
      src: "https://cdn.vox-cdn.com/thumbor/u26Pzbl-SJIb4qXWnhuJANBeIwI=/0x0:1800x1200/1720x0/filters:focal(0x0:1800x1200):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10441203/Web_05.jpg",
    },
    {
      src: "https://cdn.vox-cdn.com/thumbor/JzpMP7VabGhL0_x85Ba6fbdx99g=/0x0:1800x1200/1720x0/filters:focal(0x0:1800x1200):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10441197/Web_02.jpg",
    },
    {
      src: "https://cdn.vox-cdn.com/thumbor/fKKkox4FTfPzax69v6C2GN5BgYI=/0x0:1800x1200/1720x0/filters:focal(0x0:1800x1200):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10441199/Web_04.jpg",
    },
    {
      src: "https://cdn.vox-cdn.com/thumbor/S4yFsyr4BklFIaF9XvUUruk_avI=/0x0:1800x1200/1720x0/filters:focal(0x0:1800x1200):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10441219/Web_10.jpg",
    },
    {
      src: "https://cdn.vox-cdn.com/thumbor/JF7RK-hIAVMdmSiDLY4UioCi5vo=/0x0:1800x1200/1720x0/filters:focal(0x0:1800x1200):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10441215/Web_12.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
