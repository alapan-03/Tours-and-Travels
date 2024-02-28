import swPic from "./../Assets/swiper-pic.jpg";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Component2(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  let token = localStorage.getItem("token");

  const [data, setData] = useState(null);
  const stringWithoutQuotes = token && token.replace(/"/g, "");

  useEffect(() => {
    if (!token) {
      console.error("Token not found in localStorage");
      // return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:4000/api/v1/tours?name=${props.data}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${stringWithoutQuotes}`,
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          setData(result.data);
          props.apiData(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [props.data, token]);

  return (
    <>
      <div className="s3-grid">
        <div className="s3-inner-cont">
          <div className="s3-g-item1">
            <p className="dom-txt">International</p>

            <Swiper
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              navigation={true}
              slidesPerView={windowWidth > 1300 ? 4 : windowWidth > 1050 ? 3 : windowWidth > 650 ? 2 : 1}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {data &&
                data.map(
                  (data) =>
                    !data.domestic && (
                      // <SwiperSlide onClick={()=>{props.dataId(data._id)}}>
                      <SwiperSlide>
                        <Link key={data._id} to={`${data._id}`}>
                          <div className="inner-sw-div">
                            <img src={data.image} />
                            <div className="inner-2-sw-div">
                              <p>{data.name}</p>
                              <div className="inner-2-sw-div2">
                                <p>Starting from</p>
                                <p>${data.price}</p>
                                <p>{data.domestic && data.domestic}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    )
                    //   </Link>
                )}
            </Swiper>
          </div>

          <div className="s3-g-item1">
            <p className="dom-txt">Domestic</p>
            <Swiper
slidesPerView={windowWidth > 1300 ? 4 : windowWidth > 1050 ? 3 : windowWidth > 650 ? 2 : 1}
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {data &&
                data.map(
                  (data) =>
                    data.domestic && (
                      <SwiperSlide>
                        <Link key={data._id} to={`${data._id}`}>
                          <div className="inner-sw-div">
                            <img src={data.image} />
                            <div className="inner-2-sw-div">
                              <p>{data.name}</p>
                              <div className="inner-2-sw-div2">
                                <p>Starting from</p>
                                <p>${data.price}</p>
                                <p>{data.domestic && data.domestic}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    )
                )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
