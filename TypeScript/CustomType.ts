type ExtractPropertiesOfType<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K];
};

// Example usage with additional improvements
type Item = {
    name: string;
    age: number;
    address: string;
    email: string | null;
};

type ExtractStringProperties<T> = ExtractPropertiesOfType<T, string>;
type ExtractNumericProperties<T> = ExtractPropertiesOfType<T, number>;

// Extract string properties from the 'Person' type
type StringProperties = ExtractStringProperties<Item>;
// Extract numeric properties from the 'Person' type
type NumericProperties = ExtractNumericProperties<Item>;

// StringProperties: { name: string, address: string, email: string | null }
// NumericProperties: { age: number }
export { };