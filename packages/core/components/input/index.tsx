import React from 'react';
import {Input as TamaguiInput, SizableText, XStack} from 'tamagui';
import styles from './style';
import {ValidationErrorIcon} from '../icons';

type InputProps = {
    label?: string;
    error?: string;
};

function Input(props: InputProps) {
    const {label, error} = props;

    const errorStyle = error ? styles.inputInvalid : {};

    return (
        <>
            <SizableText>{label}</SizableText>
            <XStack {...styles.inputContainer}>
                <TamaguiInput {...styles.input} {...errorStyle} />
                {!!error && (
                    <ValidationErrorIcon width={16} height={16} style={styles.ValidationErrorIcon}/>
                )}
            </XStack>
            <SizableText {...styles.errorText}>{error}</SizableText>
        </>
    );
}

export default Input;
