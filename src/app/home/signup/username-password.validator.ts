import { ValidatorFn, FormGroup } from "@angular/forms";

export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {
    const login = formGroup.get('login').value;
    const senha = formGroup.get('senha').value;

    if(login.trim() + senha.trim()) {
        return login != senha 
        ? null 
        : { userNamePassword: true };
    } else {
        return null;
    }
};