import { EventListenerObject } from './EventListenerObj';

export abstract class baseApplication<T> implements EventListenerObject<T> {
    public abstract handleEvent(evt: T): void | undefined;
}