import type { PageLoad } from './$types';

export const load = (async ({fetch, url}) => {
    // async ใช้กับ await, {fetch, url} เป็น 1ตัวแปร ข้างในมีย่อยๆ ดู type จาก PageLoad

    console.log(url.searchParams.get('page'));
    // print คือ console.log

    let page = url.searchParams.get('page')
    // let คือประกาศตัวแปร

    if (page == null) {
        page = '0';
    }

    const api_url = `https://digi-api.com/api/v1/digimon?page=${page}`;
    // const คือประกาศตัวแปร

    try {
        const response = await fetch(api_url);
        // await รอให้โหลดข้อมูลให้หมดก่อน

        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        // เอาแค่ไฟล์ json

        return {
            digimons: json,
            current: page
        }

    } catch (error) {
        console.error(error);

        throw new Error("There is an error occur")
    }


}) satisfies PageLoad;