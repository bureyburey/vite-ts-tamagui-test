import { colors } from '../../config/style';

const styles = {
    inputContainer: {
        alignItems: 'center'
    },
    input: {
        backgroundColor: colors.grayLighter,
        width: '100%',
        borderRadius: 0,
        border: 'none',
        fontSize: 16,
        lineHeight: 22,
        height: 44,
        fontWeight: '400',
        color: colors.gray,
        paddingHorizontal: 15,
        paddingVertical: 11,
        marginHorizontal: -1,
        focusStyle: {
            backgroundColor: colors.white,
            outline: 'none',
            outlineStyle: 'none',
            borderColor: colors.black,
            borderStyle: 'solid',
            borderWidth: 1
        }
    },
    inputInvalid: {
        borderColor: colors.errorRed,
        borderWidth: 1,
        hoverStyle: {
            borderColor: colors.errorRed,
            borderWidth: 1
        },
        focusStyle: {
            borderColor: colors.errorRed,
            backgroundColor: colors.white,
            borderWidth: 1,
            outline: 'unset'
        }
    },
    ValidationErrorIcon: {
        marginLeft: -30,
        color: colors.white
    },
    errorText: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
        fontStyle: 'italic',
        marginTop: 4,
        color: colors.errorRed
    }
} as const;

export default styles;
