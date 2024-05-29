import { FC, ReactNode } from 'react'

interface ConditionalWrapperProps extends React.HTMLAttributes<HTMLDivElement>{
  shouldWrap: boolean
  children: ReactNode
}

const ConditionalWrapper: FC<ConditionalWrapperProps> = ({ shouldWrap, children, ...props }) => {
  return (
    <>
      {shouldWrap ?
        <div {...props}>
          {children}
        </div>
        : children 
      }
    </>
  )}

export default ConditionalWrapper