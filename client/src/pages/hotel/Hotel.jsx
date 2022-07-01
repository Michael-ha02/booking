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
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  // const photos = [
  //   {
  //     src: "https://cdn.vox-cdn.com/thumbor/7Uk_gQikpw0skKSgi0NRjPGj0z8=/0x0:1800x1200/1820x1213/filters:focal(853x406:1141x694):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59058095/Web_09.0.jpg",
  //   },
  //   {
  //     src: "https://cdn.vox-cdn.com/thumbor/u26Pzbl-SJIb4qXWnhuJANBeIwI=/0x0:1800x1200/1720x0/filters:focal(0x0:1800x1200):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10441203/Web_05.jpg",
  //   },
  //   {
  //     src: "https://cdn.vox-cdn.com/thumbor/JzpMP7VabGhL0_x85Ba6fbdx99g=/0x0:1800x1200/1720x0/filters:focal(0x0:1800x1200):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10441197/Web_02.jpg",
  //   },
  //   {
  //     src: "https://cdn.vox-cdn.com/thumbor/fKKkox4FTfPzax69v6C2GN5BgYI=/0x0:1800x1200/1720x0/filters:focal(0x0:1800x1200):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10441199/Web_04.jpg",
  //   },
  //   {
  //     src: "https://cdn.vox-cdn.com/thumbor/S4yFsyr4BklFIaF9XvUUruk_avI=/0x0:1800x1200/1720x0/filters:focal(0x0:1800x1200):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10441219/Web_10.jpg",
  //   },
  //   {
  //     src: "https://cdn.vox-cdn.com/thumbor/JF7RK-hIAVMdmSiDLY4UioCi5vo=/0x0:1800x1200/1720x0/filters:focal(0x0:1800x1200):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10441215/Web_12.jpg",
  //   },
  // ];

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
      {loading ? (
        "loading"
      ) : (
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
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
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
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
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
      )}
    </div>
  );
};

export default Hotel;
