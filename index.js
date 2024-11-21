document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            // 登录成功，设置会话存储标记
            sessionStorage.setItem("isLoggedIn", "true");
            window.location.href = "form.html";
        } else {
            document.getElementById("error-message").textContent = "Invalid username or password!";
        }
    } catch (error) {
        console.error("Failed login system", error);
        document.getElementById("error-message").textContent = "An error occurred while login!";
    }
});
