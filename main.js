function hit(elm) {
    if (elm.scale_val == null) {
        elm.scale_val = 0.8;
    }
    elm.scale_val = Math.round(elm.scale_val * 10) / 10;
    if (elm.scale_val <= 0) {
        elm.remove();
    } else {
        elm.style.transform = "scale(" + elm.scale_val + ")";
    }
    elm.scale_val -= 0.2;
}