

const DUMMY_EVENTS = [
    {
        id          : 'e1',
        title       : 'Programming for everyone',
        description :
            'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
        location    : '55 Mission Street, San Francisco, California 94103',
        date        : '05-12-2022',
        time        : '1:00 PM EST',
        image       : 'images/coding_event.jpg',
        isFeatured  : false
    },
    {
        id          : 'e2',
        title       : 'Networking for introverts',
        description :
            "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location    : '25 Wall Street, New York, New York 10005',
        date        : '05-30-2022',
        time        : '7:00 PM EST',
        image       : 'images/introvert_event.jpg',
        isFeatured  : true
    },
    {
        id          : 'e3',
        title       : 'Networking for extroverts',
        description :
            'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location    : 'East 8th Street, Boston, Massachusetts 02127',
        date        : '04-10-2022',
        time        : '7:00 PM EST',
        image       : 'images/extrovert_event.jpg',
        isFeatured  : true
    }
];


// getFeaturedEvents
export function getFeaturedEvents() {
    
    return DUMMY_EVENTS.filter( ( event ) => event.isFeatured );

}

// getAllEvents
export function getAllEvents() {

    return DUMMY_EVENTS;

}

// getFilteredEvents
export function getFilteredEvents( dateFilter ) {

    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter( ( event ) => {

        const eventDate = new Date( event.date );
    
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;

    } );

    return filteredEvents;

}

// getEventById
export function getEventById( id ) {

    return DUMMY_EVENTS.find( ( event ) => (

        event.id === id

    ) );

}
