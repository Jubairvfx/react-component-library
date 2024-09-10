import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

const Page = ({ title, children }) => {
    return (jsxs(Fragment, { children: [jsx("h1", { children: title }), jsx(Fragment, { children: children })] }));
};

export { Page };
//# sourceMappingURL=index.js.map
