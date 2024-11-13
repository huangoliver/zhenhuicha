document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {};
    const inputs = document.querySelectorAll("#dataForm input, #dataForm textarea");

    let allFieldsFilled = true;
    inputs.forEach(input => {
        if (input.value === "") {
            allFieldsFilled = false;
        }
        formData[input.name] = input.value;
    });

    if (allFieldsFilled) {
        const jsonData = JSON.stringify(formData);
        console.log("Submitted Data:", jsonData);
        alert("Data submitted successfully!");
        // 在这里处理保存 jsonData 的逻辑，例如将其发送到服务器或存储到数据库
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
