import { Observable } from "rxjs";

export class RxIntersectionObserver {
  private static defaultOptions?: IntersectionObserverInit;

  static setDefaultOptions(defaultOptions?: IntersectionObserverInit) {
    this.defaultOptions = defaultOptions;
  }

  static observe(target: Element, options?: IntersectionObserverInit): Observable<IntersectionObserverEntry[]>;
  static observe(targets: Element[], options?: IntersectionObserverInit): Observable<IntersectionObserverEntry[]>;
  static observe(targetOrTargets: Element | Element[], options?: IntersectionObserverInit): Observable<IntersectionObserverEntry[]> {
    const targets = Array.isArray(targetOrTargets) ? targetOrTargets.slice() : [targetOrTargets];

    return new Observable<IntersectionObserverEntry[]>(subscriber => {
      const intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        subscriber.next(entries);
      }, options ?? this.defaultOptions);

      subscriber.add(() => {
        for(const target of targets) {
          intersectionObserver.unobserve(target);
        }

        intersectionObserver.disconnect();
      });

      for(const target of targets){
        intersectionObserver.observe(target);
      }
    });
  }
}
