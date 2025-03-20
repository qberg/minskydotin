interface ShweButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

const ShweButton = ({ label = 'Contact', className = '', ...buttonProps }: ShweButtonProps) => {
  return (
    <button className={`relative text-center  w-full h-full z-40 ${className}`} {...buttonProps}>
      <div className="absolute inset-0 bg-linear-to-t from-grad-two to-grad-one  rounded-lg"></div>
      <div className="absolute inset-0 bg-linear-to-r from-black/0 to-black/100 opacity-40  rounded-lg"></div>
      <div className="absolute inset-0 bg-linear-to-b from-grad-three to-white/0 opacity-20  rounded-lg clip-path-[polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"></div>

      <div className="absolute inset-1.5 sm:inset-3 bg-linear-to-b from-grad-four to-grad-five rounded-sm sm:rounded-lg"></div>
      <div className="absolute inset-1.5 sm:inset-3 bg-grad-five opacity-50 rounded-sm sm:rounded-lg"></div>
      <div className="absolute inset-1.5 sm:inset-3 rounded-sm sm:rounded-lg border-[2px] border-transparent bg-gradient-to-r from-grad-five/50 to-grad-five bg-clip-border"></div>

      <div className="absolute inset-1.5 sm:inset-3 rounded-sm sm:rounded-lg flex items-center justify-center">
        <span className="uppercase text-black font-bold text-[14px] sm:text-[1.5em]">{label}</span>
      </div>
    </button>
  )
}

export default ShweButton
