import { ComponentProps } from "react"


interface Navlink extends ComponentProps<'a'>{
  children: string
}

export function NavLink(props: Navlink) {
  return (
    <a {...props} className='font-medium text-sm'>{props.children}</a>
  )
}