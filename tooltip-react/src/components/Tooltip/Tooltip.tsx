import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import TootlipContainer from './TootlipContainer';
import {createPopper, Placement} from '@popperjs/core';
import 'assets/elements.tooltip.scss';
import {composeEventHandler} from 'components/Utils';
import {useId} from 'hooks';

export type TooltipPropsType = {
  children: React.ReactElement;
  title?: string;
  //These are popper options
  //We are filtering some popper useless options.
  place?: Placement;
  flip?: boolean;
  preventOverflow?: boolean;
  offset?: [number, number];
};

function Tooltip(props: TooltipPropsType) {
  const {children, title, place, flip, preventOverflow, offset} = props;

  const [showTootltip, setShowTootltip] = useState(false);
  const tooltipRef = useRef(null);
  const handleRef = useRef(null);
  const id = useId();

  //we should not memoize children props
  //because It might change from the parent
  //and we might need that change in the slot/children
  const childrenProps = {
    'aria-describedby': id,
    ...children.props,
    ref: handleRef,
  };

  useEffect(() => {
    if (!showTootltip || !handleRef.current || !tooltipRef.current) return;

    const modifiers = [
      {
        name: 'offset',
        options: {
          offset,
        },
      },
      {
        name: 'flip',
        options: {
          altBoundary: flip,
        },
      },
      {
        name: 'preventOverflow',
        options: {
          altBoundary: preventOverflow,
        },
      },
    ];
    const popper = createPopper(handleRef.current!, tooltipRef.current!, {
      placement: place,
      modifiers,
    });

    //destroy popper for garbage collector
    return () => {
      popper.destroy();
    };
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [showTootltip]);

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
  const classObject = useMemo(() => `de-tooltip de-tooltip--${place}`, [place]);

  return (
    <React.Fragment>
      {React.cloneElement(children, childrenProps)}
      <TootlipContainer show={showTootltip}>
        <div id={id} className={classObject} role="tooltip" ref={tooltipRef}>
          {title}
        </div>
      </TootlipContainer>
    </React.Fragment>
  );
}

Tooltip.defaultProps = {
  place: 'top',
  flip: true,
  preventOverflow: true,
};

export default Tooltip;
