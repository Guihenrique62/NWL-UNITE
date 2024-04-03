import { ComponentProps } from "react";

interface ButtonIcon extends ComponentProps<'button'> {
  transparent?: true
}

export function ButtonIcon({transparent, ...props}: ButtonIcon) {

  return (
    <button {...props} className= {transparent
      ? 'bg-black/20 border-white/10 rounded-md p-1.5'
      : 'bg-white/10 border-white/10 rounded-md p-1.5'
      }
    />
  )
}