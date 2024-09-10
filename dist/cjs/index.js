'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Page = ({ title, children }) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("h1", { children: title }), jsxRuntime.jsx(jsxRuntime.Fragment, { children: children })] }));
};

exports.Page = Page;
//# sourceMappingURL=index.js.map
