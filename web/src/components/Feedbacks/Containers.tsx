import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function ContainerFeedbacks({ children }: Props) {
  return(
    <div className="flex flex-col items-center p-8">
      {children}
    </div>
  )
}

function ContainerTitle({ children }: Props) {
  return(
    <div className="flex flex-col items-center gap-8">
      {children}
    </div>
  )
}

export {
  ContainerFeedbacks,
  ContainerTitle
}