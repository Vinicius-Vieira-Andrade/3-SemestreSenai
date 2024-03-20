import { Input } from "../Input/Index";
import { Label } from "../Label/Index";
import { FieldContent } from "./style";

export const BoxInput = ({fieldWidth = 100, editable = false, textLabel, placeholder, fieldValue = null, onChangeText, keyType = "default", maxLength}) => {
    return (
        <FieldContent>
            <Label textLabel={textLabel}/>

            <Input editable={editable} fieldWidth={fieldWidth} fieldValue={fieldValue} placeholder={placeholder} maxLength={maxLength} keyType={keyType} onChangeText={onChangeText}/>
        </FieldContent>
    )
}