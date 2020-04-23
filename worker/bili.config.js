module.exports = {
	input: 'index.js',
	output: {
		dir: 'dist',
		fileName: 'worker.js',
		format: 'iife'
	},
	minify: false,
	target: 'browser',
	banner: `
self.props = {
	title: '🐮🍺Index',
	default_root_id: 'root',
	client_id: '202264815644.apps.googleusercontent.com',
	client_secret: 'X4Z3ca8xfWDb1Voo-F9a7ZxJ',
	refresh_token: '',
	// 是否加密指定云盘
	encrypt_Drive: true,
	// 加密哪些云盘
	encryDrive: ["root","456","789",],
	auth: false,
	user: '123',
	pass: '123',
	upload: true,
	// 开放上传是否需要验证再上传
	encrypt_upload: true,
	lite: false
};`.slice(1)
}
