export function calculate(
    x: number,
    y: number,
    operator: string
): number {

    if (operator == '+'){
        return x + y
    }
    else if (operator == '-'){
        return x - y
    }

    else {
        throw new Error("Unsupported operator")
    }

}