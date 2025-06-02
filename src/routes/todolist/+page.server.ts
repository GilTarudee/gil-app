import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { error } from '@sveltejs/kit';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';

const todoSchema = z.object({
    todo: z.string(),
    time: z.string().min(2)
  });
//   Schema ซีม่า

function generateUniqueId(length = 6): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i=0; i<length; i++){
        id +=
        chars.charAt(Math.floor(Math.random()*chars.length));
    }
    return id;
}

let todos =[
{
    id: generateUniqueId(),
    todo: 'Play Guitar',
    time: '1 Day',
    finished: true
},
{
    id: generateUniqueId(),
    todo: 'Todo 2',
    time: '3 mins',
    finished: false
}
];

export const load =(async () => {
    console.log('Load data from server');
    const form = await superValidate(zod(todoSchema));
    return {
        todos:todos,
        form:form
    };
}) satisfies PageServerLoad;
// บอกให้รู้ว่าฟังชันที่ใส่เป็นอะไร

export const actions = {
    add: async ({ request }) => {
        console.log('Triggered the server-side function');
        
        const form = await superValidate(request, zod(todoSchema));
        console.log(form);

        if (!form.valid) {
        // Return { form } and things will just work.
        return fail(400, { form });
        }
        
        // // Get data from the formData object
        // const formData = await request.formData();
        // // Perform check on the form data
        // const todo = formData.get('new-todo') as string;
        // const time = formData.get('time') as string;
        // Save data to database
        todos.push({
            todo: form.data.todo,
            time: form.data.time,
            finished: false,
            id: generateUniqueId()
        });
        console.log(todos)
        return message(form, 'Form posted successfully!');
    },
    remove: async ({request}) => {
        console.log('Remove endpoint hit');
        // Get data from the formData object
        const formData = await request.formData();
        const todo_id = formData.get('id') as string;
        todos = todos.filter((todo,idx) => {
            return todo.id !== todo_id;
        });
    },
    toggle: async ({request}) => {
        console.log('Toggle endpoint hit');
        // Get data from the formData object
        const formData = await request.formData();
        const todo_id = formData.get('id') as string;
        todos = todos.map((element, idx) => {
            if (element.id === todo_id){
                // Modify element
                element.finished = !element.finished
                return element
            } else {
                return element
            } 
        })
        console.log(todos);
        
    }
    
} satisfies Actions;

