import React from 'react';
import { AccountError, accountTypes, AccountVm, createEmptyAccountError, createEmptyAccountVm } from '../account.vm';
import classes from './create-account-form.component.module.css';
import { validateForm } from '../validations/account-form.validation';

interface Props {
      onCreate: (account: AccountVm) => void;
}
export const CreateAccountForm = ({onCreate}: Props) => {
    const [account, setAccount] = React.useState<AccountVm>(
        createEmptyAccountVm()
    );

    const handleFieldChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    const [errors, setErrors] = React.useState<AccountError>(
        createEmptyAccountError()
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formValidationResult = validateForm(account);
        setErrors(formValidationResult.errors);
        if (formValidationResult.succeeded) {
            onCreate(account);
        }
    }
    return (<form onSubmit={handleSubmit} className={classes.formContainer}>
        <div>
            <label>Tipo de cuenta:</label>
            <select
                name="type"
                onChange={handleFieldChange}
                value={account.type}
                className={classes.large}
            >
                <option value="">Seleccione una cuenta</option>
                {accountTypes.map((account, index) => (
                    <option key={index} value={account}>
                        {account}
                    </option>
                ))}
            </select>
            <p className={classes.error}>{errors.type}</p>
        </div>
        <div>
            <label>
                Alias:
            </label>
            <input
                className={classes.large}
                name="name"
                onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.name}</p>
        </div>
        <button className={classes.button} type="submit">
            REALIZAR LA TRANSFERENCIA
        </button>
    </form>)
}