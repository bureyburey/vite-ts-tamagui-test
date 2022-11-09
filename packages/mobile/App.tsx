import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// @ts-ignore
import {ResponsiveCardsListTamaguiTest} from 'core/views/responsive-cards-list-tamagui-test';
import AppProviders from "core/AppProviders";

function App() {
    return <ResponsiveCardsListTamaguiTest/>;
}

function WrappedApp() {
    return (
        <AppProviders>
            <SafeAreaProvider>
                <SafeAreaView>
                    <App/>
                </SafeAreaView>
            </SafeAreaProvider>
        </AppProviders>
    );
}

export default WrappedApp;
