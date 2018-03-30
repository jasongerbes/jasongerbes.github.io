window.onscroll = function() {
    var wScroll = getScrollPosition();
    updateSectionOpacities(wScroll);
};

window.onresize = function() {
    var wScroll = getScrollPosition();
    updateSectionOpacities(wScroll);
}

function getScrollPosition() {
    return wScroll = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
}

var sections = Array.from(document.getElementsByClassName("section"));

function updateSectionOpacities(wScroll) {
    var threshold = window.innerHeight / 3; // 33% of window height

    sections.forEach(function(section) {
        var overlay = section.getElementsByClassName("section__overlay")[0];
        if (overlay == null) return;

        var bounds = section.getBoundingClientRect();

        if (wScroll <= bounds.y) {
            overlay.style.opacity = 0;
        }
        else {
            var sectionTop = bounds.y + wScroll;
            var visibleHeight = sectionTop - wScroll + bounds.height;

            if (visibleHeight <= 0) {
                overlay.style.opacity = 1;
            }
            else if (visibleHeight < threshold) {
                overlay.style.opacity = 1 - (visibleHeight / threshold);
            }
            else {
                overlay.style.opacity = 0;
            }
        }
    });
}
