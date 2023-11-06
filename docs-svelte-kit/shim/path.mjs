/* eslint require-jsdoc:0 -- shim */

function dirname(p) {
	return p.split('/').slice(0, -1).join('/') || p;
}

function extname(p) {
	return /\.[\w$-]+$/iu.exec(p)[0];
}

function basename(p, ext) {
	const nm = p.split('/').slice(-1)[0];
	if (!ext) {
		return nm;
	}
	return nm.endsWith(ext) ? nm.slice(0, -ext.length) : nm;
}

function relative(s) {
	return s;
}

function resolve(s) {
	return s;
}

function isAbsolute() {
	return false;
}

function join(...args) {
	return args.length ? normalize(args.join('/')) : '.';
}

function normalize(path) {
	let result = [];
	for (const part of path.replace(/\/+/gu, '/').split('/')) {
		if (part === '..') {
			if (result[0] && result[0] !== '..' && result[0] !== '.') result.shift();
		} else if (part === '.' && result.length) {
			// noop
		} else {
			result.unshift(part);
		}
	}
	return result.reverse().join('/');
}

const sep = '/';
const posix = {
	dirname,
	extname,
	resolve,
	relative,
	sep,
	isAbsolute,
	join,
	normalize,
	basename
};
posix.posix = posix;
export { dirname, extname, posix, resolve, relative, sep, isAbsolute, join, normalize, basename };
export default posix;
