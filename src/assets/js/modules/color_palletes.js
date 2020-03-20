import colors from "nice-color-palettes";

export default function () {
    const changeColors = () => {
        const palette = colors[Math.floor(Math.random() * colors.length)];

        setTimeout(() => {
            document.querySelector(".shade1").style.backgroundColor =
                palette[0];
            document.querySelector(".shade2").style.backgroundColor =
                palette[1];
            document.querySelector(".shade3").style.backgroundColor =
                palette[2];
            document.querySelector(".shade4").style.backgroundColor =
                palette[3];
            document.querySelector(".shade5").style.backgroundColor =
                palette[4];
        }, 500);
    };
    setInterval(changeColors, 1000 * 30);
    changeColors();
}