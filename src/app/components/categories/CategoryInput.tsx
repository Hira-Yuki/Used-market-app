import React from 'react'
import { IconType } from 'react-icons'

interface CategoryInputProps {
  icon: IconType,
  label: string,
  selected?: boolean,
  path: string,
  onClick: (value: string) => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
  path
}) => {
  return (
    <div
      onClick={() => onClick(path)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:borderorange-500
        transition
        cursor-pointer
        ${selected ? "border-orange-500" : "border-neutral-200"}
      `}
    >
      <Icon size={30} />
      <div className='font-semibold'>
        {label}
      </div>

    </div>
  )
}

export default CategoryInput