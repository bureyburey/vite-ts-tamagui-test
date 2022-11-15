import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import vitePlugins from '@tamagui/vite-plugin';

const {tamaguiExtractPlugin, tamaguiPlugin} = vitePlugins;

const tamaguiConfig = {
    config: 'core/config/tamagui.config.ts',
    components: ['tamagui'],
}

export default defineConfig({
    resolve: {
        alias: [
            { find: 'react-native', replacement: 'react-native-web' }
        ]
    },
    plugins: [
        react(),
        tamaguiPlugin({
            ...tamaguiConfig
        }),
        // optional, adds the optimizing compiler:
        // tamaguiExtractPlugin(tamaguiConfig),
    ],
})
