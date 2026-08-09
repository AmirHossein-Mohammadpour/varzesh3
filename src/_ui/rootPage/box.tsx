const Box = ({title, className, children}: {title: string, className?: string, children: React.ReactNode}) => {
  return (
    <div className={`py-2 rounded bg-black light:bg-white inset-shadow-[0_4px_0_0_#00acc1] flex flex-col gap-2 ${className}`}>
      <h2 className={`text-primary font-bold self-center`}>{title}</h2>
      <div className={`text-xs`}>{children}</div>
    </div>
  )
}

export default Box;