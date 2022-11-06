import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
  resolve: name => import(`../views/adminkit/${name}`),
  setup({ el, App, props, plugin }) {
    const VueApp = createApp({ render: () => h(App, props) });

    VueApp.use(plugin)
        .mixin({ methods: { route: window.route } })
        .mount(el);
  },
})

InertiaProgress.init()