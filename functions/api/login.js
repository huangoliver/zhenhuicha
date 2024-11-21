export async function onRequestPost(context) {
    const { username, password } = await request.json();
    if (username === context.env.USERNAME && password === context.env.PASSWORD) {
        return new Response("Login successfully", { status: 200 });

    }
    return new Response("Invalid username or password!", { status: 403 });
}
