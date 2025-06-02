import { describe, it, expect } from 'vitest';
import { calculator } from './solve_eq_ty';
import { solve_equation } from './solve_eq_ty'

// Calculator
describe('plus test', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(calculator(1,2,'+')).toBe(1 + 2);
    });
    it('adds 73 + 69 to equal 142', () => {
        expect(calculator(73, 69, '+')).toBe(73 + 69);
    });
});

describe('minus test', () => {
    it('calculate 1 - 2 to equal 3', () => {
        expect(calculator(1,2,'-')).toBe(-1);
    });
});

describe('times test', () => {
    it('calculate 1 * 2 to equal 2', () => {
        expect(calculator(1,2,'*')).toBe(2);
    });
});

// Solve equation
describe('solve equation(string) to get the answer ', () => {
    it('1+1=2', () => {
        expect(solve_equation("1+1")).toBe(2);
    });
});

describe('solve equation(string) to get the answer ', () => {
    it('5-7', () => {
        expect(solve_equation("5-7")).toBe(-2);
    });
});

describe('solve equation(string) to get the answer ', () => {
    it('2/7*23+2', () => {
        expect(solve_equation("2/7*23+2")).toBe(2/7*23+2);
    });
});

describe('solve equation(string) to get the answer ', () => {
    it('2/7*23*2', () => {
        expect(solve_equation("2/7*23*2")).toBe(2/7*23*2);
    });
});