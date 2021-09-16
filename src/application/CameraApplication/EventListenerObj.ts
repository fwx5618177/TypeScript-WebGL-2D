export interface EventListenerObject<T> {
    handleEvent(evt: T): void;
}