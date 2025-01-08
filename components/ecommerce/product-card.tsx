import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useScroll, useTransform, motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { useRef } from "react"

interface ProductCardProps {
  imgSrc: StaticImageData
  cardClassName?: string
  imgClassName?: string
  category?: string
  title: string
  desc?: string
  x?: number
}

const ProductCard = ({ imgSrc, cardClassName, imgClassName, category, title, desc, x } : ProductCardProps) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"]
  });
  const transformStyle = useTransform(scrollYProgress, [0, 0], [0, x])

  return (
    <motion.div style={{ translateX: transformStyle }} ref={scrollRef}>
      <Card className={cardClassName}>
        <Image src={imgSrc} alt={title} className={imgClassName}/>
        <CardContent className="p-6">
          <CardTitle className="flex flex-col items-start gap-2">
            <span className="text-shadegray-200 text-sm font-normal">{category}</span>
            {title}
          </CardTitle>
          {desc && <CardDescription>{desc}</CardDescription>}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProductCard