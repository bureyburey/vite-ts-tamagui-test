import Input from "../../components/input";
import StyledInput from "../../components/styled-input";
import {YStack} from "tamagui";
import React from "react";
import {colors} from "../../config/style";

const style = {
    container: {
        flexDirection: 'column',
        $sm: {
            flexDirection: 'row',
            backgroundColor: colors.green
        }
    }
} as const;

export const ResponsiveTest = () => {
    return (
        <YStack {...style.container}>
            <Input label="<Input />" error={'Error!'}/>
            <StyledInput label="<StyledInput />" error={'Error!'}/>
        </YStack>
    );
}
