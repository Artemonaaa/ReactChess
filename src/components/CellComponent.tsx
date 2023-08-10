import { FC } from 'react'
import { Cell } from '../models/Cell'

interface ICellProps {
  cell: Cell
}

const CellComponent: FC<ICellProps> = ({ cell }) => {
  return (
    <div className={['cell', cell.color].join(' ')}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt=''/>} 
    </div>
  )
}

export default CellComponent