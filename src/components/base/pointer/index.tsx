import { TProps } from './type'

export const Pointer = (props: TProps) => {
  const { position } = props

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 cursor-none transition duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, var(--pointer), transparent 80%)`,
      }}
    />
  )
}
