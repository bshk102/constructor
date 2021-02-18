import {row, col} from './utils';

function title(block) {
    return row(col(`<h1>${block.value}</h1>`));
}

function text(block) {
    return row(col(`<p>${block.value}</p>`));
}

function columns(block) {
    const html = block.value.map(col);
    return row(html.join(''));
}

function image(block) {
    return row(`<img src=${block.value}></img>`);
}

export const templates = {title, text, columns, image};