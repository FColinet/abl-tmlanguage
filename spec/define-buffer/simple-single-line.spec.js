const { assert, expect } = require('chai');
const shared = require('../shared.js');
let grammar = shared.grammar;

describe('', () => {
    let statement = `define buffer buffer-tab for source-tab.`;
    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
        { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.buffer.abl", "keyword.other.abl"] },
        { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.buffer.abl"] },
        { "startIndex": 14, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.define.buffer.abl", "variable.other.abl"] },
        { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "meta.define.buffer.abl"] },
        { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.buffer.abl", "keyword.other.abl"] },
        { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.buffer.abl"] },
        { "startIndex": 29, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "meta.define.buffer.abl", "variable.other.abl"] },
        { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})