import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
    await page.goto('/todolist');
    await expect(page.locator('h1')).toBeVisible();
});

// // Test
// test('Test', async ({ page }) => {
//     await page.goto('/todolist');
//     await page.getByTestId('directions').click();
// });

// Check box
test('Change from True to False', async ({ page }) => {
    await page.goto('/todolist');
    await page.getByTestId('0').click();
    
    await expect(page.getByTestId('200')).toHaveText('false')
});

// Add
test('Add string to the lists', async ({ page }) => {
    await page.goto('/todolist');
    await page.getByTestId('new-todo').fill('Read Japanese!');
    await page.getByTestId('time').fill('1 hr');
    await page.getByTestId('add').click();
    
    expect(page.getByTestId('todo_box2')).toHaveText('Read Japanese!')
    expect(page.getByTestId('time_box2')).toHaveText('1 hr')

});


// Delete
test('Delete string to the lists', async ({ page }) => {
    await page.goto('/todolist');
    await page.getByTestId('delete0').click();
    
    expect(page.getByTestId('todo_box0')).toBeUndefined()
    expect(page.getByTestId('time_box0')).toHaveText('1 hr')

});





