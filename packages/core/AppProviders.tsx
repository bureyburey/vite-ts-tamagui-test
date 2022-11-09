import React from 'react';
import {TamaguiProvider} from 'tamagui';
import tamaguiConfig from './config/tamagui.config';

function AppProviders({children}: { children: React.ReactNode }) {
    return (
        <TamaguiProvider config={tamaguiConfig}>
            {children}
        </TamaguiProvider>
    );
}

export default AppProviders;
