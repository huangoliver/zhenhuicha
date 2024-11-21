export async function onRequestGet(context) {
    const { searchParams } = new URL(context.request.url);

    // 从查询参数中获取关键字和 API Key
    const apiKey = searchParams.get("apiKey");
    const keyword = searchParams.get("keyword") || "";

    // 简单鉴权
    const validApiKey = context.env.API_KEY; // 从环境变量中读取 API Key
    if (apiKey !== validApiKey) {
        return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        // 查询数据库
        const db = context.env.DB; // Cloudflare D1 数据库绑定
        const query = `
            SELECT * FROM offers
            WHERE Category LIKE ?
            OR Brand LIKE ?
            OR Bank LIKE ?
            OR APP LIKE ?
            OR OfferDescription LIKE ?
        `;
        const values = [
            `%${keyword}%`,
            `%${keyword}%`,
            `%${keyword}%`,
            `%${keyword}%`,
            `%${keyword}%`,
        ];
        const { results } = await db.prepare(query).bind(...values).all();

        return new Response(JSON.stringify({ success: true, data: results }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error in /api/data:", error);
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
