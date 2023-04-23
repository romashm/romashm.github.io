
import { options } from './parts/_options';
import { debounceResize, throttleScroll, bodyOverflow, isInViewport, scrollTo } from './parts/_utility';
import { setOptions } from './parts/setOptions';
import { key, initShortcuts } from './parts/shortcuts';
import { initNavbar } from './parts/initNavbar';
import { initNavbarFullscreen } from './parts/initNavbarFullscreen';
import { initNavbarDropEffect1 } from './parts/initNavbarDropEffect1';
import { initHeaderTitle } from './parts/initHeaderTitle';
import { initAnchors } from './parts/initAnchors';
import { initVideoBlocks } from './parts/initVideoBlocks';
import { initFullPage } from './parts/initFullPage';
import { initForms } from './parts/initForms';
import { initInstagram } from './parts/initInstagram';
import { initTwitter } from './parts/initTwitter';

/* Plugins */
import { initPluginStickySidebar } from './parts/initPluginStickySidebar';
import { initPluginNano } from './parts/initPluginNano';
import { initPluginJarallax } from './parts/initPluginJarallax';
import { initPluginFlickity } from './parts/initPluginFlickity';
import { initPluginIsotope } from './parts/initPluginIsotope';
import { initPluginPhotoswipe } from './parts/initPluginPhotoswipe';
import { initPluginTabs } from './parts/initPluginTabs';

/*------------------------------------------------------------------

  Piroll Class

-------------------------------------------------------------------*/
class PIROLL {
    constructor () {
        this.options = options;
    }

    init () {
        let self = this;
        self.initNavbar();
        self.initNavbarFullscreen();
        self.initNavbarDropEffect1();
        self.initHeaderTitle();
        self.initAnchors();
        self.initVideoBlocks();
        self.initFullPage();
        self.initForms();
        self.initForms();
        self.initInstagram();
        self.initTwitter();
        self.initShortcuts();

        // init plugins
        self.initPluginStickySidebar();
        self.initPluginNano();
        self.initPluginJarallax();
        self.initPluginFlickity();
        self.initPluginIsotope();
        self.initPluginPhotoswipe();
        self.initPluginTabs();

        return self;
    }
    setOptions (newOpts) {
        return setOptions.call(this, newOpts);
    }
    debounceResize (func) {
        return debounceResize.call(this, func);
    }
    throttleScroll (callback) {
        return throttleScroll.call(this, callback);
    }
    bodyOverflow (type) {
        return bodyOverflow.call(this, type);
    }
    isInViewport ($item, returnRect) {
        return isInViewport.call(this, $item, returnRect);
    }
    scrollTo ($to, callback) {
        return scrollTo.call(this, $to, callback);
    }
    key (name, callback) {
        return key.call(this, name, callback);
    }
    initShortcuts () {
        return initShortcuts.call(this);
    }
    initHeaderTitle () {
        return initHeaderTitle.call(this);
    }
    initNavbar () {
        return initNavbar.call(this);
    }
    initNavbarFullscreen () {
        return initNavbarFullscreen.call(this);
    }
    initNavbarDropEffect1 () {
        return initNavbarDropEffect1.call(this);
    }
    initAnchors () {
        return initAnchors.call(this);
    }
    initVideoBlocks () {
        return initVideoBlocks.call(this);
    }
    initFullPage () {
        return initFullPage.call(this);
    }
    initForms () {
        return initForms.call(this);
    }
    initInstagram () {
        return initInstagram.call(this);
    }
    initTwitter () {
        return initTwitter.call(this);
    }


    initPluginStickySidebar () {
        return initPluginStickySidebar.call(this);
    }
    initPluginNano ($context) {
        return initPluginNano.call(this, $context);
    }
    initPluginJarallax ($context) {
        return initPluginJarallax.call(this, $context);
    }
    initPluginFlickity ($context) {
        return initPluginFlickity.call(this, $context);
    }
    initPluginIsotope ($context) {
        return initPluginIsotope.call(this, $context);
    }
    initPluginPhotoswipe ($context) {
        return initPluginPhotoswipe.call(this, $context);
    }
    initPluginTabs ($context) {
        return initPluginTabs.call(this, $context);
    }
}


/*------------------------------------------------------------------

  Init Piroll

-------------------------------------------------------------------*/
window.Piroll = new PIROLL();
