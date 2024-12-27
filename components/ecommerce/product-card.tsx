import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"

interface ProductCardProps {
  imgSrc: StaticImageData
  cardClassName?: string
  imgClassName?: string
  category?: string
  title: string
  desc?: string
}

const ProductCard = ({ imgSrc, cardClassName, imgClassName, category, title, desc } : ProductCardProps) => {
  return (
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
  )
}

export default ProductCard