// @see https://rollupjs.org/guide/en/

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';


const banner = [
    `/*! Smoozzy HTTP Statuses v${pkg.version}`,
    ` *  ${pkg.homepage}`,
    ' *  Released under the MIT license',
    ' */'
].join('\n');


export default {
    input: 'src/index.js',

    output: [
        {
            format: 'cjs',  // node.js
            file: pkg.main,
            banner,
        },
        {
            format: 'umd',  // browser
            file: pkg.browser,
            name: 'smoozzy/http-statuses',
            banner,
        },
        {
            format: 'iife',  // unpkg
            file: pkg.unpkg,
            name: 'smoozzy.httpstatuses',
            banner,
        }
    ].reduce((memo, config) => {  // add config for minified versions
        memo.push(config);
        memo.push(Object.assign({}, config, {
            file: config.file.replace(/\.js$/, '.min.js'),
        }));

        return memo;
    }, []),

    plugins: [
        resolve(),
        commonjs(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        terser({
            include: [/\.min\.js$/],
            output: {
                comments: /^!/,  // keep banner
            },
        }),
    ],
};
