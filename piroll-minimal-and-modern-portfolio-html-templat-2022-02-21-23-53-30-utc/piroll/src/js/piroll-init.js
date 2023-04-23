import { options } from "./parts/_options";

if(typeof Piroll !== 'undefined') {
    Piroll.setOptions(options);
    Piroll.init();
}
