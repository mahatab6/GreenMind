import React from 'react';
import plantvide from '../assets/plantvideo.jpg';
import { Tooltip } from 'react-tooltip';

const PlantVideo = () => {
  return (
    <>
      <dialog id="my_modal_1" className="modal bg-white">
        <div className="modal-box w-11/12 max-w-3xl bg-white">
          <h3 className="font-bold text-lg mb-4 ">Watch Video</h3>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe className='w-full' height="315" src="https://www.youtube.com/embed/6DrLHqF6YmQ?si=C7S9CiBiPj5nzOpW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="w-full h-[200px] md:h-[500px] rounded-2xl relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${plantvide})`,
          filter: 'brightness(60%)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="relative flex w-20 h-20 items-center justify-center">
            <span className="absolute inline-flex w-full h-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex w-20 h-20 rounded-full items-center justify-center text-white font-bold text-lg">
              <button data-tooltip-id="my-tooltip" data-tooltip-content="Watch Video"
                className="btn bg-white border-none text-black p-5 rounded-full"
                onClick={() => document.getElementById('my_modal_1').showModal()}
              >
                Play
              </button>
              <Tooltip id="my-tooltip" />
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default PlantVideo;
