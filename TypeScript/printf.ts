export default function printf(format: string, ...args: any[]): void {
    let index = 0;
    let result = '';

    for (let i = 0; i < format.length; i++) {
        if (format[i] === '%' && i < format.length - 1) {
            const specifier = format[i + 1];
            switch (specifier) {
                case 's':
                    if (index < args.length) {
                        result += args[index++];
                    }
                    break;
                case 'd':
                case 'f':
                case 'c':
                    if (index < args.length) {
                        result += args[index++].toString();
                    }
                    break;
                case '%':
                    result += '%';
                    break;
                default:
                    throw new Error(`Unsupported format specifier: ${specifier}`);
            }
            i++; // Skip the specifier character
        } else {
            result += format[i];
        }
    }

    console.log(result);
}

// Example usage:
printf("Hello, %s! The value is %d.", "world", 50);
