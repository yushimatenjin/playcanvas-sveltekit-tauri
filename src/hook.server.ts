
/** @type {import('@sveltejs/kit').Handle} */
// @ts-ignore
export async function handle({ event, resolve }) {
    const response = await resolve(event);

    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept');

    return response;
}
