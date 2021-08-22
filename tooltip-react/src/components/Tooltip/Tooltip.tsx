import React, {useCallback, useMemo, useState} from 'react';
import TootlipContainer from './TootlipContainer';
import 'assets/elements.tooltip.scss';

export type TooltipPropsType = {
  children: React.ReactElement;
  place?: 'top' | 'bottom' | 'left' | 'right';
  title?: string;
};

function composeEventHandler(
  internal: (event: MouseEvent) => void,
  external: (event: MouseEvent) => void
) {
  return (event: MouseEvent) => {
    if (external) {
      external(event);
    }
    internal(event);
  };
}

function Tooltip(props: TooltipPropsType) {
  const {children, title, place} = props;

  const [showTootltip, setShowTootltip] = useState(false);

  //we should not memoize children props
  //because It might change from the parent
  //and we might need that change in the slot/children
  const childrenProps = {
    ...children.props,
  };

  const handleMouseOver = useCallback(() => {
    setShowTootltip(true);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setShowTootltip(false);
  }, []);

  //We cannot memorize these events
  //because this component will re-render in every mouse-enter and mouse-leave
  //and the children needs them for the next mouse event
  childrenProps.onMouseOver = composeEventHandler(
    handleMouseOver,
    childrenProps.onMouseOver
  );
  childrenProps.onMouseLeave = composeEventHandler(
    handleMouseLeave,
    childrenProps.onMouseLeave
  );

  //Classes always are the same, so we memoize them for perf matter
  const classObject = useMemo(() => `ne-tooltip ne-tooltip--${place}`, []);

  return (
    <React.Fragment>
      {React.cloneElement(children, childrenProps)}
      <TootlipContainer show={showTootltip}>
        <div className={classObject} role="tooltip">
          {title}
        </div>
      </TootlipContainer>
    </React.Fragment>
  );
}

Tooltip.defaultProps = {
  place: 'top',
};

export default Tooltip;
