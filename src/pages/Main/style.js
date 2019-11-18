import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    margin: 80px auto;
    padding: 30px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 0 25px -5px rgba(0, 0, 0, 0.4);

    h1 {
        display: flex;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    margin-top: 30px;

    input {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid #eee;
        border-radius: 5px;
        font-size: 16px;
    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`
    padding: 0 15px;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #7159c1;
`;
