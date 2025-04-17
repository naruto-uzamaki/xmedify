import { Box, Container } from "@mui/material";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import offer1 from "../../../assets/offer1.png";
import offer2 from "../../../assets/offer2.png";

export default function Offers() {
  return (
    <Box py={8}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000, // 2 seconds delay
            disableOnInteraction: false,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Box component={"img"} src={offer1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer2} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer2} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer2} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}
