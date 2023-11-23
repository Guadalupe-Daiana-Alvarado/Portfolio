import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Pagination } from "swiper/modules"
import { testimonialsData } from "./TestimonialsSlider.data"
import Image from "next/image"



export function TestimonialSlider() {
    return (
        <div>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="h-[380px] md:h-[500px] w-[270px] md:w-[650px] transition-all border-2 cursor-pointer rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
                {testimonialsData.map(({ id, name, testimonial, image, link }) => (
                    <SwiperSlide key={id}>
                        <Image src={`/assets/${image}`} alt={name} width="100" height="100" className="rounded-full mx-auto mt-5" />
                        <p className="mt-5 text-center p-3">
                        <a target="_blank" href={link} className="text-center px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">Perfil de {name}</a>
                        </p>
                        <div className="mt-5 text-center p-5">{testimonial}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
