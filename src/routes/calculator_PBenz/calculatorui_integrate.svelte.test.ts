import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event'
import Page from './+page.svelte';

describe('/+page.svelte', () => {
    test('should render h1', () => {
        render(Page);
        // screen.getByTestId("1").click();
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });
});

describe('Test calculator', () => {
    test('1 + 1 = 2', async () => {

        const user = userEvent.setup();

        render(Page);
        const button_1 = screen.getByText('1');
        expect(button_1).toBeInTheDocument();

        await user.click(button_1);

        const display = screen.getByTestId('display');

        expect(display).toHaveTextContent('1');

        const button_plus = screen.getByText('+');
        expect(button_plus).toBeInTheDocument();

        await user.click(button_plus);

        expect(display).toHaveTextContent('1+');

        const button_1_2 = screen.getByText('1');
        expect(button_1_2).toBeInTheDocument();

        await user.click(button_1_2);

        expect(display).toHaveTextContent('1+1');

        const button_equals = screen.getByText('=');
        expect(button_equals).toBeInTheDocument();

        await user.click(button_equals);

        expect(display).toHaveTextContent('2');
    });
});
