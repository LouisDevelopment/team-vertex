import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Button from "primevue/button"
import SelectButton from "primevue/selectbutton"
import Popover from "primevue/popover"
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes';

const CustomTheme = definePreset(Aura, {
    components: {
        card: {
            colorScheme: {
                light: {
                    root: {
                        background: '{surface.0}',
                        color: '{surface.700}'
                    },
                    subtitle: {
                        color: '{surface.500}'
                    }
                },
                dark: {
                    root: {
                        background: '{surface.700}',
                        color: '{surface.300}'
                    },
                    subtitle: {
                        color: '{surface.400}'
                    }
                }
            }
        }
    },
    semantic: {
        primary: {
            0: '#ffffff',
            50: '{violet.50}',
            100: '{violet.100}',
            200: '{violet.200}',
            300: '{violet.300}',
            400: '{violet.400}',
            500: '{violet.500}',
            600: '{violet.600}',
            700: '{violet.700}',
            800: '{violet.800}',
            900: '{violet.900}',
            950: '{violet.950}'
        },
        colorScheme: {
            light: {
                background: '{zinc.200}',
                header: '{neutral.700}',
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                }
            },
            dark: {
                background: '{neutral.800}',
                header: '{neutral.900}',
                surface: {
                    0: '#ffffff',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                }
            }
        }
    }
});

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: CustomTheme,
        options: {
            darkModeSelector: '.dark-mode'
        }
    },
    ripple: true
});

app.use(router)
app.use(ToastService)
app.component('Toast', Toast)
app.component('Card', Card)
app.component('Button', Button)
app.component('SelectButton', SelectButton)
app.component('Popover', Popover)
app.mount('#app')
