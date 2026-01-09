export type Center = {
  id: number,
  name: string,
  address: string,  
  cityZip: string,
  image: string,
}
export type Question = {
    id: number,
    name: string,
}
export type Theme = {
    name: string,
    questions: Array<Question>,
}