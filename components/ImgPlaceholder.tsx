import { StaticImageData } from "next/image"
import { ReactNode } from "react"

interface ImgPlaceholderProps {
  children?: ReactNode
  width?: string
  height: string
  className?: string
  url?: StaticImageData
}

const ImgPlaceholder = ({ children, width, height, className, url } : ImgPlaceholderProps) => {
  const imgPlaceholderStyle = {
    width: width || "100%",
    height: height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: url ? `url(${url})` : "#C2C2C2",
    borderRadius: "10px"
  }
  return (
    <div style={imgPlaceholderStyle} className={className}>{children}</div>
  )
}

export default ImgPlaceholder