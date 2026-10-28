import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

function Button({ className = '', type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-md bg-defaultColor px-4 py-2 font-semibold text-white transition-all hover:bg-textColor ${className}`}
      {...props}
    />
  )
}

export default Button
