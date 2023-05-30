// storing site constants across the website, so that it can be controlled from a single place

export const statusOptions = [
    { label: 'All', value: '', key: 'statusAll'},
    { label: 'Active', value: 'active', key: 'active'},
    { label: 'Retired', value: 'retired', key: 'retired'}, 
    { label: 'Destroyed', value: 'retired', key: 'destroyed'}, 
    { label: 'Unknown', value: 'unknown', key: 'unknown'}, 
];
export const typeOptions = [
    { label: 'All', value: '', key: 'typeAll'},
    { label: 'Dragon 1.0', value: 'Dragon 1.0', key: 'dragon1.0'},
    { label: 'Dragon 1.1', value: 'Dragon 1.1', key: 'dragon1.1'},
    { label: 'Dragon 2.0', value: 'Dragon 2.0', key: 'dragon2.0'},
];