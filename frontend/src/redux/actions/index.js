/* eslint-disable import/no-anonymous-default-export */
import * as apploading from './apploading.js';
import * as products from './products.js';
import * as notify from './notify.js';

export default {
    ...apploading,
    ...products,
    ...notify
}