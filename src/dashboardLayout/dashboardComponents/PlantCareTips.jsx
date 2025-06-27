import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import { MdOutlineGrass, MdOutlineLightMode, MdOutlineWaterDrop } from "react-icons/md";
import { PiPlantDuotone } from "react-icons/pi";

const careTips = [
  {
    id: 1,
    icon: <MdOutlineLightMode className="text-4xl text-yellow-500 mx-auto" />,
    title: "Light Check",
    description: "Rotate your plants weekly to ensure even growth and prevent them from leaning toward the light.",
  },
  {
    id: 2,
    icon: <MdOutlineWaterDrop className="text-4xl text-blue-500 mx-auto" />,
    title: "Water Smart",
    description: "Check soil moisture before watering to avoid overwatering your plants.",
  },
  {
    id: 3,
    icon: <PiPlantDuotone className="text-4xl text-green-500 mx-auto" />,
    title: "Leaf Care",
    description: "Clean leaves gently to improve photosynthesis and keep your plant healthy.",
  },
  {
    id: 4,
    icon: <MdOutlineGrass className="text-4xl text-lime-600 mx-auto" />,
    title: "Prune Regularly",
    description: "Trim dead or yellowing leaves to promote healthy new growth and prevent disease.",
  },
  {
    id: 5,
    icon: <MdOutlineLightMode className="text-4xl text-orange-400 mx-auto" />,
    title: "Sunlight Monitor",
    description: "Place sun-loving plants near windows and adjust positions seasonally for best light exposure.",
  },
  {
    id: 6,
    icon: <MdOutlineWaterDrop className="text-4xl text-cyan-500 mx-auto" />,
    title: "Drainage Check",
    description: "Ensure pots have good drainage to avoid root rot and stagnant water.",
  },
  {
    id: 7,
    icon: <PiPlantDuotone className="text-4xl text-emerald-500 mx-auto" />,
    title: "Fertilize Monthly",
    description: "Use balanced liquid fertilizer once a month to boost plant nutrients and growth.",
  },
  {
    id: 8,
    icon: <MdOutlineLightMode className="text-4xl text-amber-400 mx-auto" />,
    title: "Avoid Drafts",
    description: "Keep plants away from cold drafts or heat vents to avoid stress and leaf drop.",
  },
  {
    id: 9,
    icon: <MdOutlineWaterDrop className="text-4xl text-indigo-500 mx-auto" />,
    title: "Mist Leaves",
    description: "Mist tropical plants regularly to increase humidity and improve leaf condition.",
  },
  {
    id: 10,
    icon: <PiPlantDuotone className="text-4xl text-fuchsia-500 mx-auto" />,
    title: "Inspect for Pests",
    description: "Check under leaves weekly for pests like aphids and spider mites, and treat promptly.",
  },
];


const PlantCareTips = () => {
  return (
    <div className="bg-blue-100 p-5 rounded-xl text-center items-center">
      <div className="flex items-center justify-center gap-2 mb-4 text-black text-xl font-bold">
        <span className="text-blue-500">🔔</span> Plant Care Tips
      </div>

      <Swiper
      
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
        }}
        >
        {careTips.map((tip) => (
          <SwiperSlide key={tip.id}>
            <div>
              {tip.icon}
              <h3 className="text-lg font-semibold text-black mt-2">{tip.title}</h3>
              <p className="text-sm text-gray-700 mt-1 pb-5">{tip.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlantCareTips;
