import styled from "styled-components/native";

interface ITextProps {
  color?: string;
  fontSize?: string;
  weight?: string;
}

export const Text = styled.Text<ITextProps>`
  color: ${({ color }) => color ? color : '#748889'};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ weight }) => weight ? weight : '400'};
  font-size: ${({ fontSize }) => fontSize ? fontSize : '16px'};
  line-height: 25px;
`