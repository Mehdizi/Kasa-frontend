export interface Host {
  name: string
  picture: string
}

export type Rating = "1" | "2" | "3" | "4" | "5"

export interface Lodging {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: Host
  rating: Rating
  location: string
  equipments: string[]
  tags: string[]
}


