const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    const countrySelect = document.getElementById("countrySelect");
    const country = countrySelect.value;

    switch (country) {
    case "egypt":
        window.open("https://www.google.com.eg/", "_blank");
        break;
    case "usa":
        window.open("https://www.google.com/", "_blank");
        break;
    case "england":
        window.open("https://www.google.co.uk/", "_blank");
        break;
    case "saudi":
        window.open("https://www.google.com.sa/", "_blank");
        break;
    default:
        window.open("https://www.google.com/", "_blank");
        break;
    }
});
