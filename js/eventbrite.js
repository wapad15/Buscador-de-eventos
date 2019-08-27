class EventBrite {
    constructor() {
        this.tokenAuth = 'PA4KWWTQWXWKLISLNCI4';
        this.orderBy = 'date';
        this.url = 'https://www.eventbriteapi.com/v3';
    }

    getCategory() {
        const path = `${this.url}/categories/?token=${this.tokenAuth}`;
        return this.query(path);
    }

    getEvents(searchEvent, category) {
        const path = `${this.url}/events/search/?q=${searchEvent}&sort_by=${this.orderBy}&categories=${category}&token=${this.tokenAuth}`;
        return this.query(path);
    }

    async query(url) {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
}