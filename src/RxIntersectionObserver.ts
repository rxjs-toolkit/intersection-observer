import { Observable } from "rxjs";

export class RxIntersectionObserver {
  constructor(private defaultOptions?: IntersectionObserverInit) {}

  observe(target: Element, options?: IntersectionObserverInit): Observable<IntersectionObserverEntry> {
    return new Observable<IntersectionObserverEntry>(subscriber => {
      const intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        for (let entry of entries) {
          if (entry.target === target) {
            subscriber.next(entry);
            break;
          }
        }
      }, options ?? this.defaultOptions);

      subscriber.add(() => {
        intersectionObserver.unobserve(target);
        intersectionObserver.disconnect();
      });

      intersectionObserver.observe(target);
    });
  }
}
