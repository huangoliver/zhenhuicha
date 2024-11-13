document.getElementById("dataForm").addEventListener("submit", async function(event) {
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

        try {
            const response = await fetch("/api/storeData", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: jsonData
            });

            const result = await response.json();
            if (result.success) {
                alert("Data submitted successfully!");
            } else {
                alert("Failed to submit data.");
                console.error(result.error);
            }
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("An error occurred while submitting data.");
        }
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
