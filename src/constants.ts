
export const verticalAxis = ["1", "2", "3", '4', "5", "6", "7", "8"]
export const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]

export const GRID_SIZE = 100
export function samePotion(p1: Position, p2: Position) {
    return p1.x === p2.x && p1.y === p2.y
}
export interface Position {
    x:number
    y:number
}

export enum PiecesType {
    PAWN,
    BISHOP,
    KNIGHT,
    ROOK,
    QUEEN,
    KING
}
export enum TeamType {
    OPPONENT,
    UOR
}

export interface PiecesProps {
    image: string
    position: Position
    type: PiecesType
    team: TeamType
    enPassant?: boolean

}
