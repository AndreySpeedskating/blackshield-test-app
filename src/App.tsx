import { ReactElement, useCallback, useRef, useState } from 'react';

import { Button, FormContainer } from './Ui';
import { Form } from './components';
import { fieldsList } from './components/Form/constants';
import { prepearedFormInitialState, requiredFieldsList } from './components/Form/helpers';
import { IFormChangePayload, IFormDataState } from './components/Form/interfaces';
import './theme/index.css';

const App = (): ReactElement => {
  const [formData, setFormData] = useState<IFormDataState>(prepearedFormInitialState(fieldsList));
  const [formError, setFormError] = useState<string[]>([]);

  const formErrorHandler = useCallback(
    ({ name, value }: { name: string; value: boolean }): void => {
      if (!value) {
        setFormError((prev) => prev?.filter((fieldName) => fieldName !== name));
        return;
      }
      setFormError((prev) => [...prev, name]);
    },
    []
  );

  const onChangeFormDataHandler = useCallback(({ name, value }: IFormChangePayload): void => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const requiredList = useRef<string[]>(requiredFieldsList(fieldsList));

  const sendButtonAvailable =
    requiredList.current?.every((id) => formData[id]) && formError?.length === 0;

  return (
    <FormContainer>
      <Form
        formData={formData}
        fieldsList={fieldsList}
        onChangeFormData={onChangeFormDataHandler}
        formErrorHandler={formErrorHandler}
      />
      <Button
        onClick={() => console.log(formData)} // можно увидеть актуальный стейт
        disabled={!sendButtonAvailable}
        title="Отправить"
      />
    </FormContainer>
  );
};

export default App;
