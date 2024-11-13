document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const USERNAME = "your_username"; // 替换为实际的自定义变量值
    const PASSWORD = "your_username"; // 替换为实际的自定义变量值

    if (username === USERNAME && password === PASSWORD) {
        // 登录成功，设置会话存储标记
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "form.html";
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password!";
    }
});
