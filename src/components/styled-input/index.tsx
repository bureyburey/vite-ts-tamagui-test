import React from 'react';
import {styled} from '@tamagui/core';
import {Input as TamaguiInput, SizableText, XStack, isWeb} from 'tamagui';
import styles from './style';
import {ValidationErrorIcon} from '../icons';

type StyledInputProps = {
    label?: string;
    error?: string;
};

const InputFrame = styled(
    TamaguiInput,
    {
        name: 'Input',
        variants: {
            isInvalid: {
                true: {
                    ...styles.inputInvalid
                }
            }
        } as const
    },
    {isReactNative: !isWeb}
);

function StyledInput(props: StyledInputProps) {
    const {label, error} = props;

    return (
        <>
            <SizableText>{label}</SizableText>
            <XStack {...styles.inputContainer}>
                <InputFrame {...styles.input} isInvalid={!!error}/>
                {!!error && (
                    <ValidationErrorIcon width={16} height={16} style={styles.ValidationErrorIcon}/>
                )}
            </XStack>
            <SizableText {...styles.errorText}>{error}</SizableText>
        </>
    );
}

export default StyledInput;
