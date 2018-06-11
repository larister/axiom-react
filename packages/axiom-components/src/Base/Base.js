import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { importCssVariables } from '@brandwatch/axiom-materials';
import './globals.css';
importCssVariables();
import './Base.css';

const underlineTextSizes = new Set(['display2', 'display1', 'headline', 'body']);

export default class Base extends Component {
  static propTypes = {
    /**
     * The component that should be rendered with the Base component
     * functionality. If a string is given then it must be a valid
     * React registered element tag.
     */
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    /** Class name to be appended to the element */
    className: PropTypes.string,
    /** Adds ability to make an element invisible */
    cloak: PropTypes.bool,
    /** Adds the ability control the visibility of a child cloaked element */
    cloakContainer: PropTypes.bool,
    /**
     * Controls if a component should be rendered with `position: relative;`
     */
    container: PropTypes.bool,
    /**
     * Control over when the element should be hidden until.
     * Opposite of `visibleUntil`.
     */
    hiddenUntil: PropTypes.oneOf(['small', 'medium', 'large']),
    /** disables pointer events */
    pointerEventsDisabled: PropTypes.bool,
    /** Vertical margins given to the element */
    space: PropTypes.oneOf(['x0', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x8']),
    /**
     * Distance from the top of the window where the element shall be stuck
     * to. Utility for "position: sticky;".
     */
    sticky: PropTypes.string,
    /** Text wrap styling */
    textBreak: PropTypes.oneOf(['all', 'none', 'word']),
    /** Text casing styling */
    textCase: PropTypes.oneOf(['capital', 'lower', 'upper']),
    /**
     * Text central alignment either all of the time, with a value of `true`
     * otherwise at one of the breakpoints specified.
     */
    textCenter: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /** Text color styling */
    textColor: PropTypes.oneOf([
      'body',
      'day',
      'night',
      'error',
      'success',
      'warning',
      'disabled',
      'subtle',
      'twitter',
      'facebook',
      'instagram',
      'forbidden-planet',
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'event-horizon',
      'electric-dreams',
      'outer-limits',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'extraterrestrial',
      'terra-form',
      'primeval-soup',
      'future-shock',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'solar-rust',
      'ground-control',
      'space-oddity',
      'rocky-planet',
      'deep-thought',
      'luna-dust',
    ]),
    /** Text ellipsis styling */
    textEllipsis: PropTypes.bool,
    /** Text emphasis styling */
    textEmphasize: PropTypes.bool,
    /**
     * Text left alignment either all of the time, with a value of `true`
     * otherwise at one of the breakpoints specified.
     */
    textLeft: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /**
     * Text right alignment either all of the time, with a value of `true`
     * otherwise at one of the breakpoints specified.
     */
    textRight: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /** Text size styling */
    textSize: PropTypes.oneOf([
      'display2',
      'display1',
      'headline',
      'headtitle',
      'large',
      'label',
      'body',
      'small',
    ]),
    /** Text strike styling */
    textStrike: PropTypes.bool,
    /** Text bold weight styling */
    textStrong: PropTypes.bool,
    /** Text underlined styling */
    textUnderline: PropTypes.bool,
    /** Theme styling modifier */
    theme: PropTypes.oneOf(['day', 'night']),
    /**
     * Control over when the element should be visible until.
     * Opposite of `hiddenUntil`.
     */
    visibleUntil: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    Component: 'div',
  };

  render() {
    const {
      Component,
      className,
      cloak,
      cloakContainer,
      container,
      hiddenUntil,
      pointerEventsDisabled,
      space,
      sticky,
      textBreak,
      textCase,
      textCenter,
      textColor,
      textEllipsis,
      textEmphasize,
      textLeft,
      textSize,
      textRight,
      textStrike,
      textStrong,
      textUnderline,
      theme,
      visibleUntil,
      ...rest
    } = this.props;

    const underline = textUnderline &&
      underlineTextSizes.has(textSize || 'body') && (textSize || 'body');
    const classes = classnames(className, {
      'ax-cloak': cloak !== undefined,
      'ax-cloak--visible': cloak === false,
      'ax-cloak__container': cloakContainer,
      'ax-container': container,
      [`ax-hidden-until--${hiddenUntil}`]: hiddenUntil,
      [`ax-visible-until--${visibleUntil}`]: visibleUntil,
      [`ax-space--${space}`]: space,
      'ax-sticky': sticky,
      [`ax-text--case-${textCase}`]: textCase,
      'ax-text--align-center': textCenter === true,
      [`ax-text--align-center--${textCenter}`]: textCenter && textCenter !== true,
      [`ax-text--break-${textBreak}`]: textBreak,
      [`ax-text--color-${textColor}`]: textColor,
      'ax-text--ellipsis': textEllipsis,
      'ax-text--emphasize': textEmphasize,
      'ax-text--align-left': textLeft === true,
      [`ax-text--align-left--${textLeft}`]: textLeft && textLeft !== true,
      'ax-text--align-right': textRight === true,
      [`ax-text--align-right--${textRight}`]: textRight && textRight !== true,
      [`ax-text--size-${textSize}`]: textSize,
      'ax-text--strike': textStrike,
      'ax-text--strong': textStrong,
      [`ax-text--underline-${underline}`]: underline,
      [`ax-theme--${theme}`]: theme,
      'ax-pointer--disabled': pointerEventsDisabled,
    });

    if (sticky) {
      rest.style = {
        ...rest.style,
        top: sticky,
      };
    }

    return (
      <Component { ...rest } className={ classes } />
    );
  }
}
