export const sort = (a: Tarif, b: Tarif, sortField: string, ascending: boolean) => {
    const field1 = a[sortField];
    const field2 = b[sortField];

    if (field1 > field2) {
        return ascending ? 1 : -1;
    }
    if (field1 < field2) {
        return ascending ? -1 : 1;
    }
    return 0;
};
