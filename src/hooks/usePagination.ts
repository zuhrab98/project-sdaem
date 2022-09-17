import { CardsType, NewsCard } from 'type'

export const usePagination = (currentPage: number, filterCards: CardsType[] | NewsCard[], itemsPerPage: number) => {
    // получаем индекс первой страницы, последней
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const currentItem = filterCards.slice(firstItemIndex, lastItemIndex)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(filterCards.length / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return { currentItem, pageNumbers }
}
