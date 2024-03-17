export interface People {
  id: number
  name: string
  anoNascimento: string
  nivel: string
}

export interface Employees {
  msg: string[]
  produtos: EmployeesItem[]
}

export interface EmployeesItem {
  Prod: string
  Bom: number
  Ruim: number
  Indiferente: number
}
