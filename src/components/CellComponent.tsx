import { FC } from "react"
import { Cell } from "../models/Cell"

interface ICellProps {
  cell: Cell
}

const CellComponent: FC<ICellProps> = ({ cell }) => {
  return (
    <div className={['cell', cell.color].join(' ')}>
      
    </div>
  )
}

export default CellComponent