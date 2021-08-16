export function MyDecorator(): ClassDecorator {
    return target => {
        for (const propertyKey of Reflect.ownKeys(target.prototype)) {
            const descriptor = Object.getOwnPropertyDescriptor(target.prototype, propertyKey)!;
            const isMethod = descriptor.value instanceof Function;
            if (!isMethod) continue;


            const originalMethod = descriptor.value;
            // uncomment this and error will appear
            descriptor.value = function (...args: unknown[]) {
                return () => {
                    console.log('before')
                    const returnVal = originalMethod.apply(this, args);
                    console.log('after')
                    return returnVal;
                }
            }
            Object.defineProperty(target.prototype, propertyKey, descriptor);
        }
        return target;
    };
}
