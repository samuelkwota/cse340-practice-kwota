// Faculty data object
const faculty = {
    'brother-jack': {
        id: 'brother-jack',
        name: 'Brother Jack',
        office: 'STC 392',
        phone: '208-496-1234',
        email: 'jackb@byui.edu',
        department: 'Computer Science',
        title: 'Associate Professor'
    },
    'sister-enkey': {
        id: 'sister-enkey',
        name: 'Sister Enkey',
        office: 'STC 394',
        phone: '208-496-2345',
        email: 'enkeys@byui.edu',
        department: 'Computer Science',
        title: 'Assistant Professor'
    },
    // rest unchanged
};

const getFacultyById = (facultyId) => {
    return faculty[facultyId] || null;
};

const getSortedFaculty = (sortBy) => {
    const validSorts = ['name', 'department', 'title'];
    const sortKey = validSorts.includes(sortBy) ? sortBy : 'name';

    return Object.values(faculty).sort((a, b) =>
        a[sortKey].localeCompare(b[sortKey])
    );
};

export { getFacultyById, getSortedFaculty };
