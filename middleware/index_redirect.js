export default function ({ app, store, redirect }) {
	return redirect(app.localePath({ name: 'aboutme' }))
}