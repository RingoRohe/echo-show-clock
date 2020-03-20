
export default () => {
    const timeElem = document.querySelector(".time");
    const dateElem = document.querySelector(".date");
    let isVisible = !timeElem.classList.contains('hidden');

    function updateDateTime() {
        let date = new Date();
        timeElem.innerHTML = date.toLocaleTimeString(
            "de-DE",
            { timeStyle: "short" }
        );
        dateElem.innerHTML = date.toLocaleDateString("de-DE", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        if (!isVisible) {
            setTimeout(() => {
                timeElem.style.opacity = "1";
                dateElem.style.opacity = "1";
                isVisible = true;
            }, 1000);
        }
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
}