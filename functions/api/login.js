export async function onRequestPost(context) {
    try {
        const { username, password } = await request.json();
        if (username === context.env.USERNAME && password === context.env.PASSWORD) {
            return new Response(JSON.stringify({ success: true, error: "Login successfully" }), { status: 200 });
        }
        return new Response(JSON.stringify({ success: false, error: "Invalid username or password!" }), { status: 403 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
