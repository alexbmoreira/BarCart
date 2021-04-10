import { createIconSet } from '@expo/vector-icons';

const glyphMap = { 'on-tap': '' };

const expoAssetId = require('./barcart-font.ttf');
const BarCartIcons = createIconSet(glyphMap, 'FontName', expoAssetId);

export default BarCartIcons;
