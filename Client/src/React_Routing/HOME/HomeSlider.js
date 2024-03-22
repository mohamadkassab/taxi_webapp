import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Hslider.css";
import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const HomeSlider = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleslidechange = () => {
    setIsAnimated(true);
  };

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const Responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CarouselImages = gql`
    query {
      carouselImages {
        data {
          attributes {
            Description
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(CarouselImages);

  console.log(data);

  return (
    <Carousel
      afterChange={handleslidechange}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      showDots={true}
      className="hs"
      responsive={Responsive}
    >
      {/* {data.carouselImages.data.map((image, index) => (
        <div>
          <div className="p1">
            <h1 className={isAnimated ? "animate" : ""}>
         
              {image.attributes.Description}
            </h1>
            <div
              className={isAnimated ? "animate homeaboutbtn" : "homeaboutbtn"}
            ></div>
          </div>
        </div>
      ))} */}

      <div>
        <div className="p1">
          <h1 className={isAnimated ? "animate" : ""}>
            BOOK YOUR <span>LUXURY</span> RIDE
          </h1>
          <div
            className={isAnimated ? "animate homeaboutbtn" : "homeaboutbtn"}
          ></div>
        </div>
      </div>

      <div>
        <div className="p2">
          <h1 className={isAnimated ? "animate" : ""}>
            UNLOCK ELEGANCE AND <span>CONVENIENCE</span>
          </h1>
          <div
            className={isAnimated ? "animate homeaboutbtn" : "homeaboutbtn"}
          ></div>
        </div>{" "}
      </div>

      <div>
        <div className="p3">
          <h1 className={isAnimated ? "animate" : ""}>
            SECURE YOUR <span>VOYAGE</span> IN STYLE
          </h1>
          <div
            className={isAnimated ? "animate homeaboutbtn" : "homeaboutbtn"}
          ></div>
        </div>{" "}
      </div>

      <div>
        <div className="p4">
          <h1 className={isAnimated ? "animate" : ""}>
            YOUR <span>RIDE</span> YOUR WAY
          </h1>
          <div
            className={isAnimated ? "animate homeaboutbtn" : "homeaboutbtn"}
          ></div>
        </div>{" "}
      </div>
    </Carousel>
  );
};
export default HomeSlider;
