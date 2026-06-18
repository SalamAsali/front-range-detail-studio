/* @ds-bundle: {"format":3,"namespace":"FrontRangeDetailStudioDesignSystem_177b38","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Heading","sourcePath":"components/core/Heading.jsx"},{"name":"ReviewBadge","sourcePath":"components/feedback/ReviewBadge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"ServiceCard","sourcePath":"components/media/ServiceCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"c8790d84c21b","components/core/Button.jsx":"544719d30edd","components/core/Card.jsx":"d6ebe76b6b20","components/core/Heading.jsx":"bf13c80a6403","components/feedback/ReviewBadge.jsx":"25b16011138a","components/forms/Input.jsx":"45749cb17562","components/layout/Section.jsx":"0a307c20afb8","components/media/ServiceCard.jsx":"f1b51c96bcb3","ui_kits/website/BookingModal.jsx":"e087ac10c5a5","ui_kits/website/Contact.jsx":"61217d83f381","ui_kits/website/Hero.jsx":"36ec8683a6cb","ui_kits/website/Nav.jsx":"eef83cae5695","ui_kits/website/Reviews.jsx":"7f229b68d5db","ui_kits/website/Services.jsx":"63d0e94553f6","ui_kits/website/WhyUs.jsx":"1111c21187b3","ui_kits/website/data.js":"4950bc9c5a9a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FrontRangeDetailStudioDesignSystem_177b38 = window.FrontRangeDetailStudioDesignSystem_177b38 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small uppercase label / pill for certifications, tags, statuses.
 */
function Badge({
  children,
  variant = 'cyan',
  style,
  ...props
}) {
  const variants = {
    cyan: {
      backgroundColor: 'var(--color-cyan, #00BCD4)',
      color: 'var(--color-black, #000)',
      border: 'none'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-cyan, #00BCD4)',
      border: '1px solid var(--color-cyan, #00BCD4)'
    },
    neutral: {
      backgroundColor: 'var(--color-dark-card, #2d2d2d)',
      color: 'var(--color-white, #fff)',
      border: '1px solid var(--color-gray-border, #686E77)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4em',
      fontFamily: 'var(--font-display, Inter, sans-serif)',
      fontWeight: 600,
      fontSize: '0.6875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '0.4em 0.85em',
      borderRadius: 'var(--radius-full, 9999px)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Front Range primary CTA button. Michroma, uppercase, pill-shaped.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  style,
  ...props
}) {
  const base = {
    fontFamily: 'var(--font-button, Michroma, sans-serif)',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: 'var(--ls-wide, 0.05em)',
    borderRadius: 'var(--radius-button, 3.125rem)',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.625em',
    transition: 'transform var(--dur-fast, 0.2s) var(--ease-default, ease-out), background-color var(--dur-fast, 0.2s) ease-out, box-shadow var(--dur-fast, 0.2s) ease-out',
    textDecoration: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--color-cyan, #00BCD4)',
      color: 'var(--color-white, #fff)'
    },
    secondary: {
      backgroundColor: 'var(--color-dark, #111)',
      color: 'var(--color-white, #fff)',
      border: '1px solid var(--color-gray-border, #686E77)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-cyan, #00BCD4)',
      border: '1px solid var(--color-cyan, #00BCD4)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-white, #fff)'
    }
  };
  const sizes = {
    sm: {
      padding: '0.625rem 1.5rem',
      fontSize: '0.8125rem'
    },
    md: {
      padding: '1rem 2.25rem',
      fontSize: '0.9375rem'
    },
    lg: {
      padding: '1.25rem 3rem',
      fontSize: '1.0625rem'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover ? {
    transform: 'translateY(var(--lift-button, -2px))',
    boxShadow: 'var(--shadow-md)',
    ...(variant === 'primary' ? {
      backgroundColor: 'var(--color-cyan-dark, #008AA2)'
    } : {})
  } : null;
  const merged = {
    ...base,
    ...variants[variant],
    ...sizes[size],
    ...hoverStyle,
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: merged
  }, handlers, props), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    style: merged
  }, handlers, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Elevated dark surface with Material shadow. Hover lift optional.
 */
function Card({
  children,
  surface = 'surface',
  hover = false,
  padding = '24px',
  style,
  ...props
}) {
  const surfaces = {
    elevated: 'var(--color-dark-elevated, #1a1a1a)',
    surface: 'var(--color-dark-surface, #1e1e1e)',
    form: 'var(--color-dark-card, #2d2d2d)'
  };
  const [isHover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setHover(true),
    onMouseLeave: () => hover && setHover(false),
    style: {
      backgroundColor: surfaces[surface],
      borderRadius: 'var(--radius-md, 4px)',
      boxShadow: 'var(--shadow-md)',
      padding,
      color: 'var(--text-primary, #fff)',
      transition: 'transform var(--dur-normal, 0.3s) var(--ease-default, ease-out), box-shadow var(--dur-normal, 0.3s) ease-out',
      transform: isHover ? 'translateY(-12px)' : 'none',
      ...(isHover ? {
        boxShadow: 'var(--shadow-lg)'
      } : {}),
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Heading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section heading with optional cyan accent rule beneath it.
 */
function Heading({
  level = 2,
  children,
  accent = false,
  style,
  ...props
}) {
  const Tag = `h${level}`;
  const sizes = {
    1: {
      fontSize: 'var(--fluid-h1, clamp(2.15rem, 1.5vw + 1.775rem, 3rem))'
    },
    2: {
      fontSize: 'var(--fluid-h2, clamp(1.75rem, 0.5vw + 1.625rem, 2rem))'
    },
    3: {
      fontSize: 'var(--fluid-h3, clamp(1.125rem, 0.75vw + 0.9375rem, 1.375rem))'
    },
    4: {
      fontSize: '1rem',
      fontFamily: 'var(--font-body, Manrope, sans-serif)',
      fontWeight: 600
    }
  };
  const isDisplay = level < 4;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: isDisplay ? 'var(--font-heading, Archivo, sans-serif)' : undefined,
      fontWeight: isDisplay ? 700 : 600,
      textTransform: isDisplay ? 'uppercase' : 'none',
      color: 'var(--text-primary, #fff)',
      letterSpacing: 'var(--ls-tight, -0.1px)',
      lineHeight: 'var(--lh-tight, 1.2)',
      margin: 0,
      marginBottom: accent ? '12px' : '16px',
      ...sizes[level],
      ...style
    }
  }, props), children), accent && /*#__PURE__*/React.createElement("hr", {
    style: {
      width: '96px',
      height: '2px',
      backgroundColor: 'var(--color-cyan, #00BCD4)',
      border: 'none',
      margin: '0 0 24px'
    }
  }));
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Heading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ReviewBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Platform-colored review badge: star rating + count, top-border accent.
 */
function ReviewBadge({
  platform = 'google',
  rating = '5.0',
  count,
  href = '#',
  style,
  ...props
}) {
  const colors = {
    google: 'var(--color-google, #e7711b)',
    yelp: 'var(--color-yelp, #c41200)',
    facebook: 'var(--color-facebook, #3c5b9b)'
  };
  const names = {
    google: 'Google',
    yelp: 'Yelp',
    facebook: 'Facebook'
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      padding: '16px 28px',
      backgroundColor: 'var(--color-dark-surface, #1e1e1e)',
      borderRadius: 'var(--radius-md, 4px)',
      borderTop: `4px solid ${colors[platform]}`,
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-fast, 0.2s) ease-out, box-shadow var(--dur-fast, 0.2s) ease-out',
      textDecoration: 'none',
      color: 'var(--color-white, #fff)',
      fontFamily: 'var(--font-body, Manrope, sans-serif)',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors[platform],
      fontSize: '1.25rem',
      letterSpacing: '2px'
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.875rem',
      fontWeight: 300
    }
  }, rating, " on ", names[platform]), count && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--color-gray, #686868)'
    }
  }, "Based on ", count, " reviews"));
}
Object.assign(__ds_scope, { ReviewBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ReviewBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Dark-theme text input / textarea with cyan focus ring.
 */
function Input({
  label,
  as = 'input',
  id,
  style,
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const Tag = as === 'textarea' ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-display, Inter, sans-serif)',
      fontSize: '0.8125rem',
      fontWeight: 500,
      color: 'var(--color-gray, #686868)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    rows: as === 'textarea' ? 4 : undefined,
    style: {
      fontFamily: 'var(--font-body, Manrope, sans-serif)',
      fontSize: '1rem',
      fontWeight: 300,
      color: 'var(--color-white, #fff)',
      backgroundColor: 'var(--color-dark-card, #2d2d2d)',
      border: `1px solid ${focus ? 'var(--color-cyan, #00BCD4)' : 'var(--color-gray-border, #686E77)'}`,
      borderRadius: 'var(--radius-md, 4px)',
      padding: '0.85rem 1rem',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px rgba(0,188,212,0.2)' : 'none',
      transition: 'border-color var(--dur-fast, 0.2s) ease-out, box-shadow var(--dur-fast, 0.2s) ease-out',
      resize: as === 'textarea' ? 'vertical' : undefined,
      width: '100%',
      boxSizing: 'border-box',
      ...style
    }
  }, props)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Full-width page section with dark-theme background variants + width control.
 */
function Section({
  children,
  variant = 'dark',
  width = 'content',
  padding = 'lg',
  id,
  style,
  ...props
}) {
  const backgrounds = {
    dark: 'var(--color-dark, #111)',
    darker: 'var(--color-black, #000)',
    elevated: 'var(--color-dark-elevated, #1a1a1a)',
    surface: 'var(--color-dark-surface, #1e1e1e)',
    card: 'var(--color-dark-card, #2d2d2d)',
    light: 'var(--color-off-white, #FBFAF3)',
    gradient: 'transparent'
  };
  const widths = {
    content: '840px',
    wide: '1440px',
    full: '100%'
  };
  const paddings = {
    none: '0',
    sm: 'var(--space-fluid-sm, clamp(1rem, 2.5vw, 1.5rem))',
    md: 'var(--space-fluid-md, clamp(30px, 7vw, 70px))',
    lg: 'var(--space-fluid-lg, clamp(50px, 7vw, 90px))',
    xl: 'var(--space-fluid-xl, clamp(70px, 10vw, 140px))'
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    id: id,
    style: {
      backgroundColor: backgrounds[variant],
      backgroundImage: variant === 'gradient' ? 'var(--gradient-hero)' : undefined,
      color: variant === 'light' ? 'var(--color-dark, #111)' : 'var(--color-white, #fff)',
      paddingBlock: paddings[padding],
      width: '100%',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: widths[width],
      marginInline: 'auto',
      paddingInline: 'var(--gutter, 20px)'
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/media/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Full-bleed service tile: image with bottom gradient + uppercase title.
 */
function ServiceCard({
  title,
  image,
  href = '#',
  subtitle,
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-md, 4px)',
      textDecoration: 'none',
      aspectRatio: '4 / 3',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform var(--dur-normal, 0.3s) var(--ease-default, ease-out)',
      transform: hover ? 'scale(var(--zoom-image, 1.06))' : 'scale(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-card-overlay, linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%))',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '24px',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading, Archivo, sans-serif)',
      fontWeight: 700,
      fontSize: '1.5rem',
      color: 'var(--color-white, #fff)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide, 0.05em)',
      lineHeight: 1.1
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body, Manrope, sans-serif)',
      fontWeight: 300,
      fontSize: '0.875rem',
      color: 'rgba(255,255,255,0.75)'
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingModal.jsx
try { (() => {
/* Booking modal overlay */
function BookingModal({
  open,
  onClose
}) {
  const {
    Input,
    Button
  } = window.FR;
  const [done, setDone] = React.useState(false);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--color-dark-surface)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'clamp(24px, 4vw, 40px)',
      width: '100%',
      maxWidth: 440,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      background: 'none',
      border: 'none',
      color: 'var(--color-gray)',
      fontSize: 22,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, '\u2715'), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--color-cyan)',
      color: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30
    }
  }, '\u2713'), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, "Booked!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      color: 'var(--color-gray)',
      margin: 0
    }
  }, "We'll confirm your slot by phone shortly."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onClose
  }, "Done")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, "Book a Consultation"), /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "(303) 520-8023",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Vehicle",
    placeholder: "2024 Tesla Model 3"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    style: {
      width: '100%'
    }
  }, "Confirm Request"))));
}
window.BookingModal = BookingModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* Contact / booking section + footer */
function Contact({
  formState
}) {
  const {
    Section,
    Heading,
    Input,
    Button
  } = window.FR;
  const {
    sent,
    setSent
  } = formState;
  const services = ['Ceramic Coating', 'Paint Protection Film', 'Window Tinting', 'Paint Correction', 'Detailing Package'];
  return /*#__PURE__*/React.createElement(Section, {
    variant: "dark",
    width: "wide",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'clamp(28px, 6vw, 72px)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Heading, {
    level: 2,
    accent: true
  }, "Book Your Consultation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      color: 'var(--color-gray)',
      maxWidth: 420,
      marginTop: 0
    }
  }, "Tell us about your vehicle and we'll recommend the right protection. No pressure, no upsells."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 32,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--color-gray)'
    }
  }, "Studio"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16
    }
  }, "12559 E Broncos Pkwy, Englewood, CO 80112")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--color-gray)'
    }
  }, "Call"), /*#__PURE__*/React.createElement("a", {
    href: "tel:3035208023",
    style: {
      fontSize: 16,
      color: 'var(--color-cyan)'
    }
  }, "(303) 520-8023")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--color-gray)'
    }
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@frontrangedetailstudio.com",
    style: {
      fontSize: 16,
      color: 'var(--color-cyan)'
    }
  }, "info@frontrangedetailstudio.com")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-dark-surface)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      padding: 'clamp(24px, 4vw, 40px)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: 320,
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--color-cyan)',
      color: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30
    }
  }, '\u2713'), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, "Request Received"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      color: 'var(--color-gray)',
      margin: 0
    }
  }, "We'll reach out within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => setSent(false)
  }, "Send Another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "(303) 520-8023"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Vehicle",
    placeholder: "2024 Tesla Model 3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.8125rem',
      fontWeight: 500,
      color: 'var(--color-gray)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "Service"), /*#__PURE__*/React.createElement("select", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: '1rem',
      color: '#fff',
      background: 'var(--color-dark-card)',
      border: '1px solid var(--color-gray-border)',
      borderRadius: 'var(--radius-md)',
      padding: '0.85rem 1rem'
    }
  }, services.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    as: "textarea",
    placeholder: "Tell us about your vehicle\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    style: {
      width: '100%'
    }
  }, "Request Consultation")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-black)',
      padding: '40px clamp(20px, 5vw, 56px)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-inverse.svg",
    alt: "Front Range Detail Studio",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 13,
      color: 'var(--color-gray)'
    }
  }, '\u00A9', " 2026 Front Range Detail Studio \xB7 Englewood, CO \xB7 @frontrangedetailing"));
}
window.Contact = Contact;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — full-bleed image, cyan gradient overlay, big Archivo headline */
function Hero({
  onBook
}) {
  const {
    Button,
    Badge
  } = window.FR;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 620,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.FR_IMG.heroCar,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 45%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1440,
      margin: '0 auto',
      padding: '0 clamp(20px, 5vw, 56px)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "System X Certified Studio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.4rem, 4vw + 1rem, 4.2rem)',
      margin: 0,
      lineHeight: 1.05,
      textShadow: '0 2px 30px rgba(0,0,0,0.5)'
    }
  }, "Crafting Radiance.", /*#__PURE__*/React.createElement("br", null), "Preserving Elegance."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 'clamp(1rem, 0.5vw + 0.9rem, 1.25rem)',
      color: 'rgba(255,255,255,0.9)',
      maxWidth: 540,
      margin: 0
    }
  }, "Ceramic coating, paint protection film, and paint correction \u2014 performed in a climate-controlled studio in Englewood, Colorado."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBook
  }, "Book a Consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    href: "#services"
  }, "Explore Services")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Nav header — fixed, dark, cyan CTA */
function Nav({
  onBook
}) {
  const links = ['Services', 'Why Us', 'Reviews', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px clamp(20px, 5vw, 56px)',
      background: 'rgba(0,0,0,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-inverse.svg",
    alt: "Front Range Detail Studio",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(16px, 3vw, 36px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(14px, 2.4vw, 30px)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase().replace(' ', ''),
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 500,
      color: '#fff',
      textDecoration: 'none',
      letterSpacing: '0.02em'
    }
  }, l))), /*#__PURE__*/React.createElement(window.FR.Button, {
    size: "sm",
    onClick: onBook
  }, "Book Now")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reviews.jsx
try { (() => {
/* Reviews — badges + testimonial cards */
function Reviews() {
  const {
    Section,
    Heading,
    ReviewBadge,
    Card
  } = window.FR;
  const quotes = [{
    q: 'Flawless ceramic coat on my Model 3. The studio environment makes all the difference — not a speck of dust in the finish.',
    n: 'Daniel R.',
    v: 'Tesla Model 3'
  }, {
    q: 'They walked me through exactly what my Bronco needed and what it didn\u2019t. Honest, professional, and the PPF is invisible.',
    n: 'Maya K.',
    v: 'Ford Bronco'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    variant: "darker",
    width: "wide",
    id: "reviews"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 2,
    accent: true
  }, "Rated 5.0 by 126 Drivers")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '8px 0 40px'
    }
  }, /*#__PURE__*/React.createElement(ReviewBadge, {
    platform: "google",
    rating: "5.0",
    count: 126
  }), /*#__PURE__*/React.createElement(ReviewBadge, {
    platform: "yelp",
    rating: "4.9",
    count: 38
  }), /*#__PURE__*/React.createElement(ReviewBadge, {
    platform: "facebook",
    rating: "5.0",
    count: 54
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 18,
      maxWidth: 920,
      margin: '0 auto'
    }
  }, quotes.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.n,
    surface: "surface",
    padding: "28px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-cyan)',
      letterSpacing: 2,
      marginBottom: 12
    }
  }, '\u2605\u2605\u2605\u2605\u2605'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: '1.05rem',
      lineHeight: 1.5,
      margin: '0 0 18px'
    }
  }, '\u201C' + t.q + '\u201D'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, t.n), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-gray)'
    }
  }, " \xB7 ", t.v))))));
}
window.Reviews = Reviews;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reviews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Services grid — ServiceCard tiles */
function Services() {
  const {
    Section,
    Heading,
    ServiceCard
  } = window.FR;
  const I = window.FR_IMG;
  const items = [{
    title: 'Ceramic Coating',
    subtitle: 'System X Certified',
    image: I.ceramic
  }, {
    title: 'Paint Protection',
    subtitle: 'Xpel · SunTek · STEK',
    image: I.ppf
  }, {
    title: 'Window Tinting',
    subtitle: 'Heat & UV rejection',
    image: I.tint
  }, {
    title: 'Vinyl Wraps',
    subtitle: 'Color change & accents',
    image: I.wrap
  }, {
    title: 'Paint Correction',
    subtitle: 'Multi-stage polish',
    image: I.correction
  }, {
    title: 'Auto Detailing',
    subtitle: 'Bronze → Platinum',
    image: I.detail
  }];
  return /*#__PURE__*/React.createElement(Section, {
    variant: "dark",
    width: "wide",
    id: "services"
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 2,
    accent: true
  }, "Our Services"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      color: 'var(--color-gray)',
      maxWidth: 560,
      marginTop: 0,
      marginBottom: 40
    }
  }, "Every service is performed by certified technicians in a dust- and climate-controlled environment."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 18
    }
  }, items.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s)))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhyUs.jsx
try { (() => {
/* Why Us — split image + value props on cards */
function WhyUs() {
  const {
    Section,
    Heading,
    Card
  } = window.FR;
  const points = [{
    n: '01',
    t: 'Climate-Controlled Studio',
    d: 'No dust, no heat, no humidity. Coatings cure exactly as engineered — every time.'
  }, {
    n: '02',
    t: 'Certified Expertise',
    d: 'System X, Xpel, and SunTek certified installers with a meticulous, documented process.'
  }, {
    n: '03',
    t: 'Honest Guidance',
    d: 'We explain what your vehicle actually needs — no upsells, no hard-sell, no shortcuts.'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    variant: "surface",
    width: "wide",
    id: "whyus"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
      gap: 'clamp(28px, 5vw, 64px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.FR_IMG.studio,
    alt: "Our studio",
    style: {
      width: '100%',
      height: '100%',
      minHeight: 360,
      objectFit: 'cover',
      borderRadius: 'var(--radius-md)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Heading, {
    level: 2,
    accent: true
  }, "Why Front Range"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 8
    }
  }, points.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.n,
    surface: "elevated",
    padding: "22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-button)',
      color: 'var(--color-cyan)',
      fontSize: 18
    }
  }, p.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      fontSize: '1.125rem'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      color: 'var(--color-gray)',
      fontSize: '0.95rem'
    }
  }, p.d)))))))));
}
window.WhyUs = WhyUs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhyUs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Front Range — website UI kit shared image set (Unsplash, demo only) */
const FR_IMG = {
  heroCar: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80',
  ceramic: 'https://images.unsplash.com/photo-1605164599901-db7f68c4b1a7?w=800&q=80',
  ppf: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  tint: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
  wrap: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
  correction: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800&q=80',
  detail: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
  studio: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80'
};
window.FR_IMG = FR_IMG;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.ReviewBadge = __ds_scope.ReviewBadge;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();
