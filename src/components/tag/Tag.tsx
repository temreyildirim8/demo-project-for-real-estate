import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import TranslatedText, { ITranslatedText } from "../translated-text/TranslatedText";

interface TagProps {
  title: string;
}

const TagView = styled(View)`
  height: 26px;
  padding: 0 10px;
  background-color: ${props => props.theme.gray};
  margin-right: 4px;
  border-radius: 2px;

  flex-direction: row;
  align-items: center;
`;

const StyledText = styled<
  {
    buttonType?: string;
  } & ITranslatedText
>(({ buttonType, ...rest }) => (
  <TranslatedText {...rest} />
))`
  color: ${props => props.theme.darkGray3};
  font-size: 13.5px;
`

const Tag = (props: TagProps) => {
  const {title} = props;

  return (
    <TagView>
      <StyledText  text={`#${title}`} />
    </TagView>
  );
};

export default Tag;