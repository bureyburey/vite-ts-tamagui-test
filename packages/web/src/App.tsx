import React from 'react';
import './App.css';
// @ts-ignore
import {ResponsiveCardsListTamaguiTest} from "core/views/responsive-cards-list-tamagui-test";
import AppProviders from "core/AppProviders";

function App() {
    return <ResponsiveCardsListTamaguiTest/>;
}

function WrappedApp() {
    return (
        <AppProviders>
            <App/>
        </AppProviders>
    );
}

export default WrappedApp
