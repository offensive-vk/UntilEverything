// Define utility types
type Programmer = {
    name: string;
    experience: number;
};

type LifeEvent<T> = {
    date: Date;
    event: T;
};

// Advanced types and utility functions
type AddLifeEvent<T, E> = (programmer: T, event: E) => LifeEvent<E>;

type LifeEventLogger<T> = {
    programmer: T;
    events: LifeEvent<any>[];
    logEvent: AddLifeEvent<T, any>;
};

// Example usage
const programmer: Programmer = {
    name: "Vedansh",
    experience: Infinity,
};

const lifeEventLogger: LifeEventLogger<Programmer> = {
    programmer,
    events: [],
    logEvent: (programmer, event) => {
        const lifeEvent: LifeEvent<typeof event> = {
            date: new Date(),
            event,
        };
        lifeEventLogger.events.push(lifeEvent);
        return lifeEvent;
    },
};

// Log some events
const jobChangeEvent = lifeEventLogger.logEvent(programmer, "Changed job");
const promotionEvent = lifeEventLogger.logEvent(programmer, "Got promoted");

// Display logged events
console.log("Programmer: ", lifeEventLogger.programmer);
console.log("Logged Events: ", lifeEventLogger.events);