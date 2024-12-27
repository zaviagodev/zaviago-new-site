interface VideoProps {
  src: string
  width: string
  height: string
}

export function Video({ src, width, height, ...props }: VideoProps) {
    return (
      <video width={width} height={height} {...props}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
}