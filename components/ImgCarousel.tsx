import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image"
import headphone from "@/public/mock-products/headphone.png"

const ImgCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="flex justify-center">
          <Image src={headphone} alt="Headphone" className="w-auto h-[300px]"/>
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <Image src={headphone} alt="Headphone" className="w-auto h-[300px]"/>
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <Image src={headphone} alt="Headphone" className="w-auto h-[300px]"/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default ImgCarousel