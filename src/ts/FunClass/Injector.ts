﻿import 'reflect-metadata';

export class Injector {
  private readonly providerMap: Map<any, any> = new Map();
  private readonly instanceMap: Map<any, any> = new Map();
  public setProvider(key: any, value: any): void {
    if (!this.providerMap.has(key)) this.providerMap.set(key, value);
  }
  public getProvider(key: any): any {
    return this.providerMap.get(key);
  }
  public setInstance(key: any, value: any): void {
    if (!this.instanceMap.has(key)) this.instanceMap.set(key, value);
  }
  public getInstance(key: any): any {
    if (this.instanceMap.has(key)) return this.instanceMap.get(key);
    return null;
  }

  public setValue(key: any, value: any) {
    if (!this.instanceMap.has(key)) this.instanceMap.set(key, value);
  }
}
export const rootInjector = new Injector();

export function Injectable(): (_constructor: any) => any {
  return function (_constructor: any): any {
    rootInjector.setProvider(_constructor, _constructor);
    return _constructor;
  };
}

export function Inject(): (_constructor: any, propertyName: string) => any {
  return function (_constructor: any, propertyName: string): any {
    console.log(propertyName);
    //    const propertyType: any = Reflect.getMetadata('design:type', _constructor, propertyName);
    //    const injector: Injector = rootInjector;

    //    let providerInsntance = injector.getInstance(propertyType);
    //    if (!providerInsntance) {
    //        injector.getProvider(propertyType);
    //        //providerInsntance = new providerClass();
    //        //injector.setInstance(key, providerInsntance);
    //    }
    //    _constructor[propertyName] = providerInsntance;

    //    return (_constructor as any)[propertyName];
    return 0;
  };
}
