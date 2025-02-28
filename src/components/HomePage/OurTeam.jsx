import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import aminat from "../../assets/Aminatt.jpg";
import fatima from "../../assets/fatima.jpg";
import blessing from "../../assets/blessing.jpg";
import hauwa from "../../assets/Hauwa.jpg";
import quadri from "../../assets/quadri.jpg";
import lateefat from "../../assets/lateefat.jpg";
import usman from "../../assets/usman-usman.jpg";

const teamMembers = [
  { name: "Fatima Aliyu", role: "Executive Chef", image: fatima },
  { name: "Abdullah Hauwa", role: "Professional chef", image: hauwa },
  { name: "Usman Usman", role: "Marketing Manager", image: usman },
  { name: "Yakubu Quadri", role: "Master Chef", image: quadri },
  { name: "usman Lateefah", role: "Pastry Chef", image: lateefat },
  { name: "Aminat Olagunju", role: "Head Chef", image: aminat },
  { name: "Ishola Blessing", role: "Kitchen Manager", image: blessing },
];

const OurTeam = () => {
  return (
    <div className="our-team">
      <h2>--Our Master Chefs--</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="team-carousel"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="team-slide">
            <div className="member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
