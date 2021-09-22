import { useState } from 'react';

import { colorsPropType } from '../prop-types/colors';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';
import { ToolFooter } from './ToolFooter';
import { useList } from '../hooks/useList';

export const ColorTool = ({ colors: initialColors }) => {

  const [ colors, appendColor ] = useList([ ...initialColors ]);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );


};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: colorsPropType.isRequired,
};