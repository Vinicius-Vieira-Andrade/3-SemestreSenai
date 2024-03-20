import { InputText } from "./style"

export const Input = ({placeholder, fieldValue, onChangeText, keyType, maxLength, editable}) => {
    return(
        <>
            <InputText placeholder={placeholder} editable={editable} keyboardType={keyType} maxLength={maxLength} value={fieldValue} onChangeText={onChangeText}/>
        </>
    )
}