import styled from '@emotion/styled';
import {
    Title as TitleUI,
    Description as DescriptionUI,
    Button as ButtonUI,
} from '../../components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 184px;
  width: 372px;
`
export const Title = styled(TitleUI)`
  text-align: center;
  font-size: 40px;
  line-height: 1.4;
`

export const Description = styled(DescriptionUI)`
  margin-top: 12px;
  text-align: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
export const ButtonSignIn = styled(ButtonUI)``;
export const ButtonSignUp = styled(ButtonUI)`
  margin-top: 20px;
`;
