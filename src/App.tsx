import React from 'react';
import './App.css';
import Input from "./components/input";
import {YStack} from "tamagui";
import StyledInput from "./components/styled-input";

function App() {
    return (
        <YStack>
            <Input label="<Input />" error={'Error!'}/>
            <StyledInput label="<StyledInput />" error={'Error!'}/>
        </YStack>
    );
}

export default App
