document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();
        if (result.success) {
            // 登录成功，设置会话存储标记
            sessionStorage.setItem("isLoggedIn", "true");
            window.location.href = "form.html";
        } else {
            document.getElementById("error-message").textContent = result.error;
        }
    } catch (error) {
        console.error("Failed login system", error);
        document.getElementById("error-message").textContent = error;
    }
});
