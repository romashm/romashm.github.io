import { $ } from "./_utility";

/*------------------------------------------------------------------

  Shortcuts
  https://github.com/madrobby/keymaster

-------------------------------------------------------------------*/
function key (name, fn) {
    if(typeof window.key === 'undefined') {
        return;
    }
    name = this.options && this.options.shortcuts && this.options.shortcuts[name];

    if(name) {
        window.key(name, fn);
    }
}
function initShortcuts () {
    if(typeof window.key === 'undefined' || !this.options.enableShortcuts) {
        return;
    }

    const self = this;

    // FullScreen Video
    self.key('closeFullscreenVideo', () => {
        self.closeFullScreenVideo && self.closeFullScreenVideo();
    });

    // post single
    self.key('postScrollToComments', () => {
        let $comments = $('#comments');
        if($comments.length) {
            self.scrollTo($comments);
        }
    });

    // Side Left Navbar
    let $leftSide = $('.nk-navbar-left-side');
    self.key('toggleSideLeftNavbar', () => {
        self.toggleSide($leftSide);
    });
    self.key('openSideLeftNavbar', () => {
        self.openSide($leftSide);
    });

    // Side Right Navbar
    let $rightSide = $('.nk-navbar-right-side');
    self.key('toggleSideRightNavbar', () => {
        self.toggleSide($rightSide);
    });
    self.key('openSideRightNavbar', () => {
        self.openSide($rightSide);
    });

    // Fullscreen Navbar
    self.key('toggleFullscreenNavbar', () => {
        self.toggleFullscreenNavbar();
    });
    self.key('openFullscreenNavbar', () => {
        self.openFullscreenNavbar();
    });
    self.key('closeFullscreenNavbar', () => {
        self.closeFullscreenNavbar();
    });

    // ESC - use also inside form elements
    window.key.filter = (event) => {
        let tagName = (event.target || event.srcElement).tagName;
        let isContentEditable = (event.target || event.srcElement).getAttribute('contenteditable');
        let isESC = window.key.isPressed('esc');
        return isESC || !(isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA');
    };
}

export { key, initShortcuts };
