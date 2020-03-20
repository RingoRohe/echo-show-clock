import time from './modules/time';
import weather from './modules/weather';
import palette from './modules/color_palletes';
import fullscreen from './modules/fullscreen';

WebFont.load({
    google: {
        families: ["Droid Sans"]
    }
});


time();
weather();
palette();
fullscreen();
