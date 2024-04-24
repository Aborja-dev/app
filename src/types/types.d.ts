export interface Layout {
    children: React.ReactNode
}
export interface Author {
    avatar: string
    name: string
    booksPublished: number
}

export interface BlogEntry {
    urlImg: string
    tags: string[]
    title: string
    subtitle: string
    date: string
    summary: string
    comments: number
}
export interface Book {
    urlImg: string
    tags: string[]
    author: string
    title: string
    date?: string
    summary?: string
    price: number
    rating: number
    comments: number
    subtitle: string
}
export type Slots = Record<string, React.ReactNode>