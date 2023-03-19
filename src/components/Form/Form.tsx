import { ChangeEvent, FC, FocusEvent, useState } from 'react';

import { errorMessage, fieldTypeAlias, formValidationScheme, placeholderAlias } from './constants';
import { IField, IFormChangePayload, IFormDataState } from './interfaces';
import styles from './styles.module.css';
import Cross from '../icons/Cross';

type PropTypes = {
  formData: IFormDataState;
  formErrorHandler: ({ name, value }: { name: string; value: boolean }) => void;
  onChangeFormData: ({ name, value }: IFormChangePayload) => void;
  fieldsList?: IField[];
};

const Form: FC<PropTypes> = ({ fieldsList, onChangeFormData, formData, formErrorHandler }) => {
  const [error, setError] = useState<{ [key: string]: boolean }>({});

  const chackFieldValidation = (name: string, value: string): void => {
    if (formValidationScheme[name]) {
      formErrorHandler({ name, value: !formValidationScheme[name].exec(value) });
      setError((prev) => ({ ...prev, [name]: !formValidationScheme[name].exec(value) }));
    }
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>
  ): void => {
    const {
      target: { name, value },
    } = e;
    onChangeFormData({ name, value });
    if (error[name]) {
      chackFieldValidation(name, value);
    }
  };

  const onClearIconClick = (name: string): void => {
    onChangeFormData({ name, value: '' });
  };

  const onFieldBlur = (e: FocusEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = e;
    chackFieldValidation(name, value);
  };

  return (
    <div className={styles['form-container']}>
      {fieldsList?.map(({ id, type, label, required }) => (
        <div key={id}>
          {label && (
            <p className={styles['label']}>
              {label}
              {required && <span className={styles['required-mark']}>*</span>}
            </p>
          )}
          <div className={styles['input-container']}>
            <input
              className={`${styles['input']} ${error[id] && styles['error']}`}
              id={id}
              name={id}
              placeholder={placeholderAlias[id]}
              value={formData[id]}
              onBlur={onFieldBlur}
              type={fieldTypeAlias[type]}
              onChange={onChangeHandler}
              maxLength={255}
            />
            {formData[id]?.length > 0 && (
              <button
                onClick={() => onClearIconClick(id)}
                className={styles['clear']}
                aria-label="close button"
              >
                <Cross />
              </button>
            )}
          </div>
          {error[id] && <span className={styles['error-message']}>{errorMessage[id]}</span>}
        </div>
      ))}
    </div>
  );
};

export default Form;
