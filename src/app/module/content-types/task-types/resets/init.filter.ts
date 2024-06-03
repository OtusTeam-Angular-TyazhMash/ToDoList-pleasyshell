export const resetInitFilter = () => {
    return {
        isOpen: false,
        FilterContent: [
            {
                Id: 1,
                FilterName: 'Все'
            },
            {
                Id: 2,
                FilterName: 'Выполнены'
            },
            {
                Id: 3,
                FilterName: 'Не выполнены'
            },
        ]
    }
}