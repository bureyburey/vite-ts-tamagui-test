import React from 'react';
import { styled } from '@tamagui/core';

import { Input as TamaguiInput, SizableText, XStack, isWeb } from 'tamagui';
import styles from './style';
import { ValidationErrorIcon } from '../icons';
import colors from '../../config/colors';

type InputProps = {
    error?: string;
};

const InputFrame = styled(
    TamaguiInput,
    {
        name: 'Input',
        variants: {
            bold: {
                true: {
                    fontWeight: 'bold !important'
                },
                false: {
                    fontWeight: 'normal'
                }
            },
            isInvalid: {
                true: {
                    ...styles.inputInvalid
                }
            }
        } as const
    },
    { isReactNative: !isWeb }
);

function Input(props: InputProps) {
    const { error } = props;

    return (
        <>
            <XStack {...styles.inputContainer}>
                <InputFrame {...styles.input} isInvalid={!!error} />
                {!!error && (
                    <ValidationErrorIcon width={16} height={16} style={styles.ValidationErrorIcon} />
                )}
            </XStack>
            <SizableText {...styles.errorText}>{error}</SizableText>
        </>
    );
}

export default Input;
