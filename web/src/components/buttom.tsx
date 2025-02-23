import { type ComponentProps, ReactNode } from 'react'

interface ButtomProps extends ComponentProps<'button'> {}
export function Buttom(props: ButtomProps) {
  return (
    <button
      className=" flex justify-between items-center px-5 h-12 bg-gray-500  text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  )
}
