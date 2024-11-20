export async function onRequestPost(context) {
    try {
        const data = await context.request.json();
        const { id, Category, Brand, Bank, APP, Difficulty, Region, Time, Duration, OfferDescription, Link, Condition } = data;

        // 插入数据到 D1 数据库
        const result = await context.env.D1.prepare(
            `INSERT INTO offers (id, Category, Brand, Bank, APP, Difficulty, Region, Time, Duration, OfferDescription, Link, Condition)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ).bind(id, Category, Brand, Bank, APP, Difficulty, Region, Time, Duration, OfferDescription, Link, Condition).run();

        return new Response(JSON.stringify({ success: true, result }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
