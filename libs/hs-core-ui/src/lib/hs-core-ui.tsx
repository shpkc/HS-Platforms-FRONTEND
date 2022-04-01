import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HsCoreUiProps {}

const StyledHsCoreUi = styled.div`
  color: pink;
`;

export function HsCoreUi(props: HsCoreUiProps) {
  return (
    <StyledHsCoreUi>
      <h1>Welcome to HsCoreUi!</h1>
    </StyledHsCoreUi>
  );
}

export default HsCoreUi;
