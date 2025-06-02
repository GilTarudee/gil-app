# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


pnpx sv add =เพิ่ม package ใน  package.json

test มี 3 ระดับ
- unit test => function
- integretion test => ภาพรวม
- n2n test => ทั้งหมด

TDD = test driven development เขียนเทสก่อนเลย
required --> Red --> Green --> Refactor (Clean code) --> Red .....

Run test => pnpm run test

Type ของตัวแปร
    1.static = ห้ามเขียนตัวแปรทับ -> มีsuggestมาให้
    2.dynamic =  เขียนทับได้ เช่น python

local - ลบ history เก่า

Server
ส่งใช้ post 
ขอใช้ get

เพิ่ม package 
pnpm i @testing-library/user-event --D
(Developer depend)

กิลต้องใช้
pnpm
pnpx

ลบ pnpm remove @playwright/test (ชื่อ pakage)

Progressive enhanmance

//กิลผิดเอง
z.string() ไม่เติมอะไรเลยก็ยังเป็น string เปล่า
วิธีทำให้มันผิด time: z.string().min(2) เป็นการกำหนดขั้นต่ำของตัวอักษร

$constraints.time $constraints.todo มันต่างกัน!!!

เวลาดู pagkage
1. ใช้ MIT -- ใช้ฟรี 
2. assisibility 

