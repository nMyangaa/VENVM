/* @ds-bundle: {"format":3,"namespace":"VENVMLINEDesignSystem_2d12f7","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SpecTile","sourcePath":"components/core/SpecTile.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"8aa73b19732c","components/core/Card.jsx":"2ce1a8f4ecc8","components/core/IconButton.jsx":"43326304930a","components/core/Input.jsx":"40bff68e60e6","components/core/SpecTile.jsx":"59b7437b71f8","components/core/Tag.jsx":"d6ad59ae7ebc","ui_kits/storefront/App.jsx":"6f207486ae3d","ui_kits/storefront/BrandsScreen.jsx":"563d4cae906e","ui_kits/storefront/CartScreen.jsx":"c5159075901d","ui_kits/storefront/Chrome.jsx":"8ab65e33d596","ui_kits/storefront/HomeScreen.jsx":"9b7ec6d385d7","ui_kits/storefront/ProductScreen.jsx":"044bcb732254","ui_kits/storefront/SignInScreen.jsx":"5997afc41660","ui_kits/storefront/data.js":"27b93783d272"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VENVMLINEDesignSystem_2d12f7 = window.VENVMLINEDesignSystem_2d12f7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VENVM LINE — Button
 * High-contrast actions with uppercase mono-tracked labels.
 * Variants: primary (azure fill), ghost (hairline outline),
 * raised (neutral fill that flips to azure on hover, the storefront
 * "ADD TO CART" treatment).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: 'var(--label-sm-size)'
    },
    md: {
      padding: '13px 26px',
      fontSize: 'var(--label-md-size)'
    },
    lg: {
      padding: '15px 36px',
      fontSize: 'var(--label-md-size)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-headline)',
    fontWeight: 'var(--weight-bold)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-widest)',
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    boxShadow: variant === 'primary' ? 'var(--glow-blue-soft)' : 'none',
    transition: 'transform var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--action-primary-bg)',
      color: 'var(--action-primary-fg)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--on-surface)',
      borderColor: 'rgba(226, 226, 230, 0.2)'
    },
    raised: {
      background: 'var(--surface-container-high)',
      color: 'var(--on-surface)',
      borderColor: 'var(--border-faint)'
    }
  };
  const onEnter = e => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') {
      el.style.transform = 'translateY(-3px)';
      el.style.boxShadow = 'var(--glow-blue-ring)';
    }
    if (variant === 'ghost') {
      el.style.background = 'var(--action-hover-wash)';
      el.style.borderColor = 'rgba(161, 201, 255, 0.4)';
      el.style.transform = 'translateY(-2px)';
    }
    if (variant === 'raised') {
      el.style.background = 'var(--primary-container)';
      el.style.color = 'var(--on-primary-container)';
      el.style.transform = 'translateY(-2px)';
      el.style.boxShadow = 'var(--glow-blue-soft)';
    }
  };
  const onLeave = e => {
    const el = e.currentTarget;
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = variant === 'primary' ? 'var(--glow-blue-soft)' : 'none';
    Object.assign(el.style, variants[variant]);
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(-1px) scale(0.98)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = variant === 'primary' ? 'translateY(-3px)' : 'translateY(-2px)';
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: '18px'
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: '18px'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VENVM LINE — Card
 * Frosted glass container etched into the dark. Defined by a hairline
 * border (not a fill), optional carbon-fibre texture, and an azure
 * border-glow on hover. The brand's universal surface.
 */
function Card({
  children,
  texture = true,
  hover = false,
  radius = 'lg',
  padding = 24,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const radii = {
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  const base = {
    position: 'relative',
    background: 'var(--glass-fill)',
    backdropFilter: 'blur(var(--glass-blur)) saturate(var(--glass-saturate))',
    WebkitBackdropFilter: 'blur(var(--glass-blur)) saturate(var(--glass-saturate))',
    border: '1px solid ' + (hover && hovered ? 'var(--glass-border-hover)' : 'var(--glass-border-color)'),
    borderRadius: radii[radius] || radii.lg,
    padding,
    overflow: 'hidden',
    transform: hover && hovered ? 'translateY(-3px)' : 'translateY(0)',
    boxShadow: hover && hovered ? 'var(--glass-inset), var(--glass-shadow-hover), var(--glow-blue-soft)' : 'var(--glass-inset), var(--glass-shadow)',
    transition: 'border-color var(--dur-slow) var(--ease-standard), transform var(--dur-slow) var(--ease-standard), box-shadow var(--dur-slow) var(--ease-standard)',
    willChange: hover ? 'transform' : undefined,
    ...(texture ? {
      backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%, transparent)',
      backgroundSize: '4px 4px'
    } : {})
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setHovered(true),
    onMouseLeave: () => hover && setHovered(false),
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VENVM LINE — IconButton
 * Square, chromeless icon control used in the nav (cart, account) and
 * quantity steppers. Hover lights a faint neutral wash; can carry a
 * count badge (e.g. cart items).
 */
function IconButton({
  icon,
  size = 'md',
  fill = false,
  active = false,
  badge,
  href,
  onClick,
  ariaLabel,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      box: 32,
      glyph: 18,
      pad: 6
    },
    md: {
      box: 40,
      glyph: 24,
      pad: 8
    },
    lg: {
      box: 48,
      glyph: 28,
      pad: 10
    }
  }[size];
  const base = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.box,
    height: sizes.box,
    padding: sizes.pad,
    background: 'transparent',
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    color: active ? 'var(--primary)' : 'var(--on-surface)',
    cursor: 'pointer',
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)'
  };
  const onEnter = e => {
    e.currentTarget.style.background = 'rgba(55, 57, 61, 0.28)';
    e.currentTarget.style.transform = 'scale(1.08)';
  };
  const onLeave = e => {
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.transform = 'scale(1)';
  };
  const onDown = e => {
    e.currentTarget.style.transform = 'scale(0.92)';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'scale(1.08)';
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    "aria-label": ariaLabel,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp,
    style: {
      ...base,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: 'material-symbols-outlined' + (fill || active ? ' fill' : ''),
    style: {
      fontSize: sizes.glyph
    }
  }, icon), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 20,
      height: 20,
      padding: '0 5px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--secondary-container)',
      color: 'var(--on-secondary-container)',
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 'var(--weight-bold)',
      borderRadius: 'var(--radius-pill)'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VENVM LINE — Input
 * Dark well with a hairline border and a 2px bottom rail that lights
 * azure on focus. Optional leading icon + label. Mirrors the auth /
 * search field treatment from the storefront.
 */
function Input({
  label,
  icon,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  trailing,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%'
  };
  const labelStyle = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--label-sm-size)',
    fontWeight: 'var(--weight-medium)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-widest)',
    color: 'var(--on-surface-variant)'
  };
  const field = {
    width: '100%',
    background: 'var(--surface-input)',
    border: '1px solid rgba(63, 71, 83, 0.2)',
    borderBottom: focused ? '2px solid var(--focus-ring)' : '2px solid rgba(63, 71, 83, 0.4)',
    borderRadius: 'var(--radius-md)',
    padding: `13px 14px 13px ${icon ? '40px' : '14px'}`,
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--body-sm-size)',
    color: 'var(--on-surface)',
    outline: 'none',
    boxShadow: focused ? 'var(--focus-glow)' : 'none',
    transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      ...wrap,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--outline)',
      fontSize: 18,
      pointerEvents: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: field
  }, rest)), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }, trailing)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SpecTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VENVM LINE — SpecTile
 * Glass stat block: a filled azure icon over a bold value and a
 * mono-tracked label. Used on product pages for at-a-glance specs
 * (+18 WHP, -2.1kg, CARB LEGAL).
 */
function SpecTile({
  icon,
  value,
  label,
  style,
  ...rest
}) {
  const base = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '4px',
    padding: '20px 12px',
    background: 'var(--glass-fill)',
    backdropFilter: 'blur(var(--glass-blur)) saturate(var(--glass-saturate))',
    WebkitBackdropFilter: 'blur(var(--glass-blur)) saturate(var(--glass-saturate))',
    border: 'var(--glass-border)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--glass-inset), var(--glass-shadow)',
    backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%, transparent)',
    backgroundSize: '4px 4px'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined fill",
    style: {
      color: 'var(--primary)',
      fontSize: 26,
      marginBottom: 4
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--headline-sm-size)',
      color: 'var(--on-surface)',
      lineHeight: 1.1
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--on-surface-variant)'
    }
  }, label));
}
Object.assign(__ds_scope, { SpecTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpecTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VENVM LINE — Tag
 * Mono-tracked status chip. Two shapes from the storefront:
 *  - 'spec'  : filled, sharp (radius-sm) — RACE SPEC, TITANIUM, etc.
 *  - 'fitment': outlined, pill-ish (radius-xl) — BMW G80 M3, S58 ENGINE.
 * Tones: magenta (energy), neutral, azure, outline.
 */
function Tag({
  children,
  shape = 'spec',
  tone = 'neutral',
  style,
  ...rest
}) {
  const tones = {
    magenta: {
      background: 'var(--secondary-container)',
      color: 'var(--on-secondary-container)',
      border: 'transparent'
    },
    azure: {
      background: 'var(--primary-container)',
      color: 'var(--on-primary-container)',
      border: 'transparent'
    },
    neutral: {
      background: 'var(--surface-container-highest)',
      color: 'var(--on-surface)',
      border: 'transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--on-surface-variant)',
      border: 'var(--border-faint)'
    }
  };
  const t = tones[tone];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-label)',
    fontWeight: 'var(--weight-bold)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    lineHeight: 1,
    background: t.background,
    color: t.color,
    border: '1px solid ' + t.border,
    ...(shape === 'spec' ? {
      fontSize: '10px',
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)'
    } : {
      fontSize: 'var(--label-sm-size)',
      padding: '7px 13px',
      borderRadius: 'var(--radius-xl)'
    })
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/App.jsx
try { (() => {
// VENVM LINE — storefront app shell (click-through router)
const {
  NavBar,
  Footer,
  HomeScreen,
  ProductScreen,
  CartScreen,
  SignInScreen,
  BrandsScreen
} = window;
function App() {
  const [screen, setScreen] = React.useState('home');
  const [items, setItems] = React.useState([{
    id: 'intake',
    name: 'V-FLOW INTAKE',
    sub: 'Carbon Fiber Cold Air Intake',
    chip: 'BMW S58',
    price: 1850,
    qty: 1,
    img: 'intake'
  }, {
    id: 'exhaust',
    name: 'VALVEMASTER TI',
    sub: 'Full Titanium Valvetronic Exhaust',
    chip: 'Grade 5 Ti',
    price: 4200,
    qty: 1,
    img: 'exhaust'
  }]);
  const go = s => {
    setScreen(s);
    window.scrollTo(0, 0);
  };
  const cartCount = items.reduce((s, it) => s + it.qty, 0);
  const addToCart = qty => {
    setItems(cur => {
      const exists = cur.find(it => it.id === 'intake');
      if (exists) return cur.map(it => it.id === 'intake' ? {
        ...it,
        qty: it.qty + qty
      } : it);
      return [...cur, {
        id: 'intake',
        name: 'V-FLOW INTAKE',
        sub: 'Carbon Fiber Cold Air Intake',
        chip: 'BMW S58',
        price: 1850,
        qty,
        img: 'intake'
      }];
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    go: go,
    active: screen,
    cartCount: cartCount
  }), screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go
  }), screen === 'brands' && /*#__PURE__*/React.createElement(BrandsScreen, null), screen === 'product' && /*#__PURE__*/React.createElement(ProductScreen, {
    go: go,
    addToCart: addToCart
  }), screen === 'cart' && /*#__PURE__*/React.createElement(CartScreen, {
    go: go,
    items: items,
    setItems: setItems
  }), screen === 'account' && /*#__PURE__*/React.createElement(SignInScreen, null), /*#__PURE__*/React.createElement(Footer, null));
}
/* auto-mount removed for the standalone build — StorefrontApp owns #root */

})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/BrandsScreen.jsx
try { (() => {
// VENVM LINE — Brands screen (catalogue wheel + partnership contact)
const {
  Card,
  IconButton: BrandIconButton
} = window.VENVMLINEDesignSystem_2d12f7;
const brandsMaxW = {
  maxWidth: 'var(--layout-max)',
  margin: '0 auto'
};

// Placeholder brand slots — matte-black wells until real brand art is dropped in.
const BRAND_SLOTS = ['BRAND 01', 'BRAND 02', 'BRAND 03', 'BRAND 04', 'BRAND 05', 'BRAND 06', 'BRAND 07', 'BRAND 08'];
function BrandsHeader() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...brandsMaxW,
      padding: '88px 48px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-md-size)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--primary)',
      margin: '0 0 16px'
    }
  }, "Our Network"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 800,
      fontSize: 'var(--headline-xl-size)',
      letterSpacing: '-0.02em',
      color: 'var(--on-surface)',
      margin: '0 0 16px'
    }
  }, "Brand Catalogue"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-line)',
      color: 'var(--on-surface-variant)',
      margin: 0
    }
  }, "Discover the brands we carry!"));
}
function BrandWheel() {
  const trackRef = React.useRef(null);
  const drag = React.useRef({
    down: false,
    startX: 0,
    startScroll: 0
  });
  const scrollBy = dir => {
    const el = trackRef.current;
    if (el) el.scrollBy({
      left: dir * 320,
      behavior: 'smooth'
    });
  };
  const onDown = e => {
    const el = trackRef.current;
    drag.current = {
      down: true,
      startX: e.pageX,
      startScroll: el.scrollLeft
    };
    el.style.cursor = 'grabbing';
  };
  const onMove = e => {
    if (!drag.current.down) return;
    e.preventDefault();
    trackRef.current.scrollLeft = drag.current.startScroll - (e.pageX - drag.current.startX);
  };
  const endDrag = () => {
    drag.current.down = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 0 96px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 96,
      background: 'linear-gradient(to right, var(--background), transparent)',
      zIndex: 3,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: 96,
      background: 'linear-gradient(to left, var(--background), transparent)',
      zIndex: 3,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...brandsMaxW,
      padding: '0 48px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(BrandIconButton, {
    icon: "chevron_left",
    onClick: () => scrollBy(-1),
    ariaLabel: "Scroll left"
  }), /*#__PURE__*/React.createElement(BrandIconButton, {
    icon: "chevron_right",
    onClick: () => scrollBy(1),
    ariaLabel: "Scroll right"
  })), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseDown: onDown,
    onMouseMove: onMove,
    onMouseUp: endDrag,
    onMouseLeave: endDrag,
    className: "brand-wheel",
    style: {
      display: 'flex',
      gap: 28,
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      padding: '8px 48px 28px',
      cursor: 'grab',
      WebkitOverflowScrolling: 'touch'
    }
  }, BRAND_SLOTS.map(name => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      flex: '0 0 auto',
      scrollSnapAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 280,
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      background: '#000',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono, ui-monospace, monospace)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-placeholder)'
    }
  }, "brand image")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--label-md-size)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--on-surface)',
      textAlign: 'center',
      margin: 0
    }
  }, name)))));
}
function PartnershipContact() {
  const boxes = [{
    icon: 'photo_camera',
    label: 'Instagram',
    lines: ['@venvmline', 'DM for collabs']
  }, {
    icon: 'call',
    label: 'Mobile & Email',
    lines: ['+1 (000) 000-0000', 'partners@venvmline.com']
  }, {
    icon: 'location_on',
    label: 'Mailing Address',
    lines: ['VENVM LINE HQ', '0000 Performance Way', 'City, ST 00000']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-container-lowest)',
      borderTop: '1px solid var(--divider)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...brandsMaxW,
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto 64px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-md-size)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--primary)',
      margin: '0 0 20px'
    }
  }, "Partner With Us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--headline-lg-size)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: 'var(--on-surface)',
      margin: 0
    }
  }, "If you're a brand and you're interested in working with us, contact us for our affiliate programs or brand partnerships!")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, boxes.map(b => /*#__PURE__*/React.createElement(Card, {
    key: b.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 32,
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 32,
      color: 'var(--primary)'
    }
  }, b.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--label-md-size)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--on-surface)',
      margin: 0
    }
  }, b.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginTop: 'auto'
    }
  }, b.lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-sm-size)',
      color: i === 0 ? 'var(--on-surface)' : 'var(--on-surface-variant)'
    }
  }, l))))))));
}
function BrandsScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BrandsHeader, null), /*#__PURE__*/React.createElement(BrandWheel, null), /*#__PURE__*/React.createElement(PartnershipContact, null));
}
Object.assign(window, {
  BrandsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/BrandsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartScreen.jsx
try { (() => {
// VENVM LINE — Cart screen
const {
  Button,
  IconButton,
  Tag,
  Card
} = window.VENVMLINEDesignSystem_2d12f7;
const maxWC = {
  maxWidth: 'var(--layout-max)',
  margin: '0 auto'
};
const TAX_RATE = 0.09;
function CartScreen({
  go,
  items,
  setItems
}) {
  const [promo, setPromo] = React.useState('');
  const [promoMsg, setPromoMsg] = React.useState(null);
  const changeQty = (id, delta) => setItems(cur => cur.map(it => it.id === id ? {
    ...it,
    qty: Math.max(1, it.qty + delta)
  } : it));
  const remove = id => setItems(cur => cur.filter(it => it.id !== id));
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  const count = items.reduce((s, it) => s + it.qty, 0);
  const money = n => '$' + n.toLocaleString(undefined, {
    minimumFractionDigits: n % 1 ? 2 : 0,
    maximumFractionDigits: 2
  });
  const applyPromo = () => {
    const c = promo.trim().toUpperCase();
    if (c === 'VENVM10') setPromoMsg({
      ok: true,
      t: 'CODE APPLIED — 10% OFF'
    });else if (c) setPromoMsg({
      ok: false,
      t: 'INVALID PROMO CODE'
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...maxWC,
      padding: '32px 48px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      letterSpacing: '0.1em',
      color: 'var(--on-surface-variant)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer'
    }
  }, "HOME"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 14
    }
  }, "chevron_right"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--on-surface)'
    }
  }, "CART")), /*#__PURE__*/React.createElement("section", {
    style: {
      ...maxWC,
      padding: '0 48px 32px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 48,
      letterSpacing: '-0.02em',
      color: 'var(--on-surface)',
      margin: 0
    }
  }, "YOUR CART"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-md-size)',
      letterSpacing: '0.1em',
      color: 'var(--on-surface-variant)'
    }
  }, count, " ITEM", count !== 1 ? 'S' : '')), /*#__PURE__*/React.createElement("section", {
    style: {
      ...maxWC,
      padding: '0 48px 80px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 64,
      color: 'var(--outline)',
      marginBottom: 24
    }
  }, "shopping_cart"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--headline-md-size)',
      color: 'var(--on-surface)',
      margin: '0 0 12px'
    }
  }, "YOUR CART IS EMPTY"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      color: 'var(--on-surface-variant)',
      maxWidth: 380,
      marginBottom: 32
    }
  }, "Looks like you haven't added any performance parts yet."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrow_back",
    onClick: () => go('home')
  }, "Shop Now")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '6fr 2fr 2fr 2fr',
      gap: 16,
      paddingBottom: 16,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, ['PRODUCT', 'QTY', 'PRICE', 'TOTAL'].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      letterSpacing: '0.1em',
      color: 'var(--on-surface-variant)',
      textAlign: i === 0 ? 'left' : i === 1 ? 'center' : 'right'
    }
  }, h))), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '6fr 2fr 2fr 2fr',
      gap: 16,
      alignItems: 'center',
      padding: '24px 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      flexShrink: 0,
      background: 'var(--surface-container)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.VENVM_IMG[it.img],
    alt: it.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--body-md-size)',
      color: 'var(--on-surface)',
      margin: '0 0 4px'
    }
  }, it.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      letterSpacing: '0.05em',
      color: 'var(--on-surface-variant)',
      margin: '0 0 8px'
    }
  }, it.sub), /*#__PURE__*/React.createElement(Tag, {
    shape: "fitment",
    tone: "outline",
    style: {
      fontSize: 10,
      padding: '3px 9px'
    }
  }, it.chip))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--border-faint)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "remove",
    size: "sm",
    onClick: () => changeQty(it.id, -1),
    ariaLabel: "Decrease"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 28,
      textAlign: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      color: 'var(--on-surface)'
    }
  }, it.qty), /*#__PURE__*/React.createElement(IconButton, {
    icon: "add",
    size: "sm",
    onClick: () => changeQty(it.id, 1),
    ariaLabel: "Increase"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-md-size)',
      color: 'var(--on-surface-variant)'
    }
  }, money(it.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--body-md-size)',
      color: 'var(--on-surface)'
    }
  }, money(it.price * it.qty)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "close",
    size: "sm",
    onClick: () => remove(it.id),
    ariaLabel: "Remove"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-headline)',
      fontSize: 'var(--label-md-size)',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--on-surface-variant)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "arrow_back"), "CONTINUE SHOPPING")))), items.length > 0 && /*#__PURE__*/React.createElement(Card, {
    style: {
      position: 'sticky',
      top: 112,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--label-md-size)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--on-surface)',
      margin: '0 0 24px'
    }
  }, "Order Summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginBottom: 24
    }
  }, [['Subtotal', money(subtotal)], ['Shipping', 'FREE'], ['Tax (Est.)', money(tax)]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-sm-size)',
      color: 'var(--on-surface-variant)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-md-size)',
      color: v === 'FREE' ? 'var(--primary)' : 'var(--on-surface)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid var(--border-faint)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      marginBottom: promoMsg ? 8 : 24
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: promo,
    onChange: e => setPromo(e.target.value),
    placeholder: "PROMO CODE",
    style: {
      background: 'transparent',
      border: 'none',
      flex: 1,
      padding: '11px 14px',
      color: 'var(--on-surface)',
      fontFamily: 'var(--font-label)',
      fontSize: 12,
      letterSpacing: '0.1em',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: applyPromo,
    style: {
      padding: '0 18px',
      background: 'var(--surface-container-high)',
      border: 'none',
      color: 'var(--on-surface)',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      letterSpacing: '0.1em',
      cursor: 'pointer'
    }
  }, "APPLY")), promoMsg && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.08em',
      margin: '0 0 24px',
      color: promoMsg.ok ? 'var(--primary)' : 'var(--error)'
    }
  }, promoMsg.t), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hairline)',
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--body-md-size)',
      color: 'var(--on-surface)'
    }
  }, "TOTAL"), /*#__PURE__*/React.createElement("span", {
    className: "text-glow-blue",
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--primary)'
    }
  }, money(total))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "lock",
    fullWidth: true,
    onClick: () => alert('Checkout is not available in this demo.')
  }, "Secure Checkout"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 24
    }
  }, [['local_shipping', 'Free shipping on orders $500+'], ['shield', '2-year manufacturer warranty'], ['undo', '30-day hassle-free returns']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--on-surface-variant)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined fill",
    style: {
      color: 'var(--primary)',
      fontSize: 16
    }
  }, ic), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      letterSpacing: '0.05em'
    }
  }, t)))))));
}
Object.assign(window, {
  CartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Chrome.jsx
try { (() => {
// VENVM LINE — NavBar + Footer (shared chrome)
const {
  IconButton
} = window.VENVMLINEDesignSystem_2d12f7;
const navWrap = {
  position: 'sticky',
  top: 0,
  zIndex: 50,
  background: 'var(--nav-fill)',
  backdropFilter: 'blur(var(--nav-blur))',
  WebkitBackdropFilter: 'blur(var(--nav-blur))',
  borderBottom: '1px solid rgba(63,71,83,0.1)'
};
const navInner = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 'var(--nav-height)',
  padding: '0 48px',
  maxWidth: 'var(--layout-max)',
  margin: '0 auto'
};
const linkStyle = active => ({
  fontFamily: 'var(--font-headline)',
  fontSize: 'var(--label-md-size)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-widest)',
  color: active ? 'var(--primary)' : 'var(--on-surface-variant)',
  borderBottom: active ? '2px solid var(--primary)' : '2px solid transparent',
  paddingBottom: 4,
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'color var(--dur-base) var(--ease-standard)'
});
function NavBar({
  go,
  active,
  cartCount
}) {
  const links = [{
    label: 'Home',
    screen: 'home'
  }, {
    label: 'Shop',
    screen: 'home'
  }, {
    label: 'Brands',
    screen: 'brands'
  }, {
    label: 'About Us',
    screen: null
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: navWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: navInner
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => go('home'),
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--headline-md-size)',
      letterSpacing: '-0.02em',
      color: 'var(--on-surface)',
      cursor: 'pointer'
    }
  }, "VENVM LINE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40
    },
    className: "venvm-navlinks"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    onClick: () => l.screen ? go(l.screen) : null,
    style: linkStyle(l.label === 'Home' ? active === 'home' : active === l.screen && l.screen !== 'home')
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "venvm-search",
    placeholder: "SEARCH",
    style: {
      background: 'var(--surface-container-low)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 14px',
      width: 168,
      color: 'var(--on-surface)',
      fontFamily: 'var(--font-label)',
      fontSize: 12,
      letterSpacing: '0.1em',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "shopping_cart",
    badge: cartCount > 0 ? cartCount : undefined,
    active: active === 'cart',
    onClick: () => go('cart'),
    ariaLabel: "Cart"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "account_circle",
    active: active === 'account',
    onClick: () => go('account'),
    ariaLabel: "Account"
  }))));
}
const footCol = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24
};
const footHead = {
  fontFamily: 'var(--font-headline)',
  fontWeight: 700,
  fontSize: 'var(--label-md-size)',
  letterSpacing: '0.1em',
  color: 'var(--on-surface)',
  margin: 0
};
const footLink = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--body-sm-size)',
  color: 'var(--on-surface-variant)',
  textDecoration: 'none',
  cursor: 'pointer'
};
function Footer() {
  const cols = [{
    h: 'SUPPORT',
    items: ['Warranty', 'Shipping', 'Dealers']
  }, {
    h: 'LEGAL',
    items: ['Privacy', 'Terms', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-container-lowest)',
      borderTop: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 48,
      padding: '64px 48px',
      maxWidth: 'var(--layout-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: footCol
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--headline-sm-size)',
      color: 'var(--on-surface)'
    }
  }, "VENVM LINE"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body-sm-size)',
      color: 'var(--on-surface-variant)',
      opacity: 0.8
    }
  }, "Forging the future of high-performance automotive engineering."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "share",
    size: "sm",
    ariaLabel: "Share"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "rss_feed",
    size: "sm",
    ariaLabel: "RSS"
  }))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: footCol
  }, /*#__PURE__*/React.createElement("h5", {
    style: footHead
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    style: footLink
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: footCol
  }, /*#__PURE__*/React.createElement("h5", {
    style: footHead
  }, "NEWSLETTER"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body-sm-size)',
      color: 'var(--on-surface-variant)'
    }
  }, "Get early access to limited edition drops."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--outline-variant)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "EMAIL ADDRESS",
    style: {
      background: 'transparent',
      border: 'none',
      flex: 1,
      padding: '8px 0',
      color: 'var(--on-surface)',
      fontFamily: 'var(--font-label)',
      fontSize: 12,
      letterSpacing: '0.1em',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow_forward",
    size: "sm",
    active: true,
    ariaLabel: "Subscribe"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 48px',
      borderTop: '1px solid var(--divider)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body-sm-size)',
      color: 'var(--on-surface-variant)',
      opacity: 0.6
    }
  }, "\xA9 2026 VENVM LINE. ENGINEERED TO PERFECTION.")));
}
Object.assign(window, {
  NavBar,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/HomeScreen.jsx
try { (() => {
// VENVM LINE — Home screen (hero, categories, new arrivals, brand story)
const {
  Button,
  Tag,
  Card
} = window.VENVMLINEDesignSystem_2d12f7;
const maxW = {
  maxWidth: 'var(--layout-max)',
  margin: '0 auto'
};
const h2 = {
  fontFamily: 'var(--font-headline)',
  fontWeight: 700,
  fontSize: 'var(--headline-xl-size)',
  letterSpacing: '-0.02em',
  color: 'var(--on-surface)',
  margin: '0 0 8px'
};
const eyebrow = {
  fontFamily: 'var(--font-label)',
  fontSize: 'var(--label-md-size)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-widest)',
  color: 'var(--primary)',
  margin: 0
};
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 720,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 212,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/hero-m4.jpg",
    alt: "VENVM LINE \u2014 matte-black M4 Competition",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 62%',
      filter: 'brightness(0.92) contrast(1.05)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 90% 55% at 50% 95%, rgba(255,78,124,0.10), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(10,11,14,0.82) 0%, rgba(10,11,14,0.35) 28%, transparent 50%, rgba(10,11,14,0.6) 82%, var(--background) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: '0 24px',
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 800,
      fontSize: 112,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--on-surface)',
      margin: '0 0 20px'
    }
  }, "VENVM ", /*#__PURE__*/React.createElement("span", {
    className: "venvm-glitch",
    style: {
      color: 'var(--primary)'
    }
  }, "LINE", /*#__PURE__*/React.createElement("span", {
    className: "g g1",
    "aria-hidden": "true"
  }, "LINE"), /*#__PURE__*/React.createElement("span", {
    className: "g g2",
    "aria-hidden": "true"
  }, "LINE"), /*#__PURE__*/React.createElement("span", {
    className: "g g3",
    "aria-hidden": "true"
  }, "LINE"), /*#__PURE__*/React.createElement("span", {
    className: "g g4",
    "aria-hidden": "true"
  }, "LINE"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 16,
      letterSpacing: 'var(--tracking-hero)',
      textTransform: 'uppercase',
      color: 'var(--on-surface-variant)',
      margin: '0 auto 36px',
      maxWidth: 640
    }
  }, "Engineered to outperform. Precision tuning & accessories for the elite."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('product'),
    style: {
      background: 'var(--primary)',
      color: 'var(--on-primary)',
      boxShadow: 'var(--glow-blue-soft)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--glow-blue-ring)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--glow-blue-soft)';
      e.currentTarget.style.background = 'var(--primary)';
      e.currentTarget.style.color = 'var(--on-primary)';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'translateY(-1px) scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
    }
  }, "Shop Performance"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(150,161,173,0.22)';
      e.currentTarget.style.borderColor = 'rgba(150,161,173,0.45)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.borderColor = 'rgba(226,226,230,0.2)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, "Explore Styling"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      left: '50%',
      transform: 'translateX(-50%)'
    },
    className: "venvm-bounce"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: 'var(--primary)'
    }
  }, "keyboard_double_arrow_down")));
}
function Categories() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...maxW,
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, window.VENVM_CATEGORIES.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    hover: true,
    style: {
      aspectRatio: '4/5',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined fill",
    style: {
      position: 'absolute',
      top: 24,
      right: 24,
      fontSize: 88,
      color: 'var(--on-surface)',
      opacity: 0.18
    }
  }, c.icon), /*#__PURE__*/React.createElement(Tag, {
    tone: c.tone,
    style: {
      alignSelf: 'flex-start',
      marginBottom: 16
    }
  }, c.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--headline-md-size)',
      color: 'var(--on-surface)',
      margin: '0 0 8px'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--body-sm-size)',
      color: 'var(--on-surface-variant)'
    }
  }, c.desc)))));
}
function NewArrivals({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-container-lowest)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...maxW,
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "NEW ARRIVALS"), /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "Q4 Performance Drop")), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('product'),
    style: {
      fontFamily: 'var(--font-headline)',
      fontSize: 'var(--label-md-size)',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--on-surface-variant)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer'
    }
  }, "VIEW ALL ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "arrow_forward"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 48
    }
  }, window.VENVM_PRODUCTS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('product'),
    style: {
      width: '50%',
      aspectRatio: '1',
      background: 'var(--surface-container)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.VENVM_IMG[p.img],
    alt: p.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--headline-md-size)',
      color: 'var(--on-surface)',
      margin: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      color: 'var(--secondary)',
      fontSize: 16
    }
  }, "$", p.price.toLocaleString())), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '0 0 32px',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, p.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--body-sm-size)',
      color: 'var(--on-surface-variant)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined fill",
    style: {
      color: 'var(--primary)',
      fontSize: 16
    }
  }, "check_circle"), f))), /*#__PURE__*/React.createElement(Button, {
    variant: "raised",
    size: "sm",
    fullWidth: true,
    onClick: () => go('product')
  }, "Add to Cart")))))));
}
function BrandStory() {
  const stats = [['15+', 'Years Exp'], ['0.01mm', 'Precision'], ['GLOBAL', 'Network']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '104px 0',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "carbon-texture",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      padding: '0 48px',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: 'var(--primary)',
      fontSize: 48,
      marginBottom: 32
    }
  }, "verified"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      fontSize: 'var(--headline-xl-size)',
      marginBottom: 32
    }
  }, "ENGINEERING BEYOND LIMITS"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-line)',
      color: 'var(--on-surface-variant)',
      marginBottom: 40
    }
  }, "VENVM LINE is the flagship performance division of ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--on-surface)'
    }
  }, "Blitz International"), ". We don't just manufacture parts; we engineer advantages. Every component bearing the VENVM mark has undergone rigorous stress testing on track and tarmac."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 64
    }
  }, stats.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--headline-md-size)',
      color: 'var(--primary)',
      margin: 0
    }
  }, v), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--on-surface-variant)',
      margin: 0
    }
  }, l))))));
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Categories, null), /*#__PURE__*/React.createElement(NewArrivals, {
    go: go
  }), /*#__PURE__*/React.createElement(BrandStory, null));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductScreen.jsx
try { (() => {
// VENVM LINE — Product detail screen
const {
  Button,
  IconButton,
  Tag,
  Card,
  SpecTile
} = window.VENVMLINEDesignSystem_2d12f7;
const maxWP = {
  maxWidth: 'var(--layout-max)',
  margin: '0 auto'
};
function Breadcrumb({
  go,
  trail
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...maxWP,
      padding: '32px 48px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      letterSpacing: '0.1em',
      color: 'var(--on-surface-variant)'
    }
  }, trail.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 14
    }
  }, "chevron_right"), /*#__PURE__*/React.createElement("span", {
    onClick: t.go ? () => go(t.go) : null,
    style: {
      cursor: t.go ? 'pointer' : 'default',
      color: i === trail.length - 1 ? 'var(--on-surface)' : 'inherit'
    }
  }, t.label))));
}
function ProductScreen({
  go,
  addToCart
}) {
  const imgs = [window.VENVM_IMG.intake, window.VENVM_IMG.exhaust, window.VENVM_IMG.car, window.VENVM_IMG.intake];
  const [active, setActive] = React.useState(0);
  const [qty, setQty] = React.useState(1);
  const specs = [['Material', '2x2 Twill Pre-preg Carbon Fiber'], ['Filter Type', 'Oiled Cotton Gauze, Washable'], ['MAF Housing', 'CNC 6061-T6 Aluminum, Anodized'], ['Power Gain', '+18 WHP / +14 WTQ (Baseline Dyno)'], ['Weight', '1.4 kg (OEM: 3.5 kg)'], ['Install Time', '45 min — Bolt-on, No Tune'], ['Emissions', 'CARB E.O. Pending (50-State Legal)'], ['Warranty', '2 Years / Unlimited Mileage']];
  const feats = ['2x2 Twill Pre-preg Carbon Fiber Construction', 'High-flow Washable & Reusable Air Filter', 'CNC-machined 6061 Aluminum MAF Housing', 'Dyno-tested +18 WHP / +14 WTQ Gains', 'Direct Bolt-on — No Cutting or Modification'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
    go: go,
    trail: [{
      label: 'HOME',
      go: 'home'
    }, {
      label: 'SHOP',
      go: 'home'
    }, {
      label: 'V-FLOW INTAKE'
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...maxWP,
      padding: '0 48px 80px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      aspectRatio: '1',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: imgs[active],
    alt: "V-FLOW INTAKE",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12
    }
  }, imgs.map((src, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    style: {
      aspectRatio: '1',
      background: 'var(--surface-container)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: 'pointer',
      padding: 0,
      border: '2px solid ' + (i === active ? 'var(--primary)' : 'var(--border-faint)'),
      boxShadow: i === active ? 'var(--glow-blue-soft)' : 'none',
      transition: 'all var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: 'Thumbnail ' + (i + 1),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "magenta"
  }, "Race Spec"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "New Arrival")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 48,
      letterSpacing: '-0.02em',
      color: 'var(--on-surface)',
      margin: '0 0 8px'
    }
  }, "V-FLOW INTAKE"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--on-surface-variant)',
      margin: '0 0 24px'
    }
  }, "Carbon Fiber Cold Air Intake System"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-glow-blue",
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--primary)'
    }
  }, "$1,850"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      color: 'var(--on-surface-variant)',
      textDecoration: 'line-through'
    }
  }, "$2,100"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      color: 'var(--secondary)'
    }
  }, "SAVE $250")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hairline)',
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SpecTile, {
    icon: "speed",
    value: "+18",
    label: "WHP"
  }), /*#__PURE__*/React.createElement(SpecTile, {
    icon: "scale",
    value: "-2.1kg",
    label: "Weight"
  }), /*#__PURE__*/React.createElement(SpecTile, {
    icon: "verified",
    value: "CARB",
    label: "Legal"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--label-md-size)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--on-surface)',
      margin: '0 0 16px'
    }
  }, "Key Features"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '0 0 32px',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 'var(--body-sm-size)',
      color: 'var(--on-surface-variant)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined fill",
    style: {
      color: 'var(--primary)',
      fontSize: 16
    }
  }, "check_circle"), f))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--label-md-size)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--on-surface)',
      margin: '0 0 16px'
    }
  }, "Fitment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 32
    }
  }, ['BMW G80 M3', 'BMW G82 M4', 'BMW G87 M2', 'S58 Engine'].map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    shape: "fitment",
    tone: "outline"
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hairline)',
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--border-faint)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "remove",
    onClick: () => setQty(q => Math.max(1, q - 1)),
    ariaLabel: "Decrease"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 48,
      textAlign: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-md-size)',
      color: 'var(--on-surface)'
    }
  }, qty), /*#__PURE__*/React.createElement(IconButton, {
    icon: "add",
    onClick: () => setQty(q => q + 1),
    ariaLabel: "Increase"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "shopping_cart",
    fullWidth: true,
    onClick: () => {
      addToCart(qty);
      go('cart');
    }
  }, "Add to Cart")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, [['local_shipping', 'Free Shipping'], ['shield', '2-Year Warranty']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--on-surface-variant)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined fill",
    style: {
      color: 'var(--primary)',
      fontSize: 16
    }
  }, ic), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      letterSpacing: '0.08em'
    }
  }, t)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-container-lowest)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...maxWP,
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 'var(--headline-xl-size)',
      letterSpacing: '-0.02em',
      color: 'var(--on-surface)',
      margin: '0 0 8px'
    }
  }, "TECHNICAL DATA"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-md-size)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--primary)',
      margin: '0 0 48px'
    }
  }, "Engineering Specifications"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 1,
      background: 'var(--border-hairline)'
    }
  }, specs.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--background)',
      padding: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--on-surface-variant)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-sm-size)',
      color: 'var(--on-surface)',
      textAlign: 'right'
    }
  }, v)))))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/SignInScreen.jsx
try { (() => {
// VENVM LINE — Sign In screen
const {
  Button,
  IconButton,
  Input,
  Card
} = window.VENVMLINEDesignSystem_2d12f7;
function SignInScreen() {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '64px 24px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bg-glow)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 420,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-panel carbon-texture",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-xl)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined fill",
    style: {
      color: 'var(--primary)',
      fontSize: 30
    }
  }, "shield_person")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 36,
      letterSpacing: '-0.02em',
      color: 'var(--on-surface)',
      margin: '0 0 12px'
    }
  }, "SIGN ", /*#__PURE__*/React.createElement("span", {
    className: "text-glow-blue",
    style: {
      color: 'var(--primary)'
    }
  }, "IN")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--label-sm-size)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--on-surface-variant)',
      margin: 0
    }
  }, "Access your VENVM LINE account")), /*#__PURE__*/React.createElement(Card, {
    radius: "xl",
    padding: 32
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email Address",
    icon: "mail",
    type: "email",
    placeholder: "driver@venvm.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    icon: "lock",
    type: show ? 'text' : 'password',
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    trailing: /*#__PURE__*/React.createElement(IconButton, {
      icon: show ? 'visibility' : 'visibility_off',
      size: "sm",
      onClick: () => setShow(s => !s),
      ariaLabel: "Toggle password"
    })
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "login",
    fullWidth: true,
    onClick: () => alert('Sign-in is not available in this demo.')
  }, "Sign In"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      margin: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: 'var(--tracking-hero)',
      color: 'var(--on-surface-variant)'
    }
  }, "OR"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-hairline)'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "person_add",
    fullWidth: true
  }, "Create New Account")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 24,
      marginTop: 32
    }
  }, [['lock', 'SSL Encrypted'], ['verified_user', 'Secure Login']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--on-surface-variant)',
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined fill",
    style: {
      color: 'var(--primary)',
      fontSize: 14
    }
  }, ic), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, t))))));
}
Object.assign(window, {
  SignInScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/SignInScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
// VENVM LINE — shared demo data + image assets for the storefront UI kit.
// Images are the original storefront's Google-hosted product shots (stable CDN).
window.VENVM_IMG = {
  car: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBurD_jLBZq1wu8N1IfiqgjZkMrxA2Jhy41YofeIbSNOxP5Ap7ug_-0JYEFaNFQj5UetcI6AwZVmX6SrdOFQCyc8mZnZxi-Id7AbImgy7UO9e23Dzg5SuyA3H04zS30sGThVR9w9OD7S4BakdFT-jzOmXmEor4NP9zBhVMNwo7ObEW1g3gM82Pr2BGRja6lOnLgZJz_zims2L0ht-N9KYVGzrvUzUHbhQ36yvKwG6X1pwoCqo85u7B-iuG9cjmwEBD9RE9rreYs-1Yd',
  intake: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVoXahjg9ixu3GwEbE-XpNRMetX8LliT_JkXbA9NuRCXT32ui5jR8vI_SSb0hxtkf3ikQ3UU1HDoWlmCQa1b5fe6gZSUZ1fedxwesRLXJIY9PDJEmFM4xWeu69Sc3OlmvVGIKqlsa5lfGbje4No9I2vZZAUMp7BsrFswJBfxAGVyhnT1GwlH1Q6mhT0GldWPTOrbzeciTx6OUviKopriqLN3Qr9I3cgVGFLd-Yy_M1gX_HLYPg8ES9Z__N2h7UQwxzHyFeohWF67D5',
  exhaust: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYpfxoyS-nJpGP3Smy4Sg5Qu3XDHb-Hr268TIiaojuShpyKolUEH6_3Z9DQNE9-pJJfk14kiJruUm7-VLmZ-ut7Nt6xIcESgZP1MU905mEqkQgxhHrY4Ry-MoHQIn4VUFj-UYSiMNl97oZ4R-nDoxoaRgY0p-zMF8_AR7wGoqs5H8T_1CXo2dOQR8es4z8wp5Xs_LVhziEXxsCUPDzpENvgLFEjRrmK21aRMuSbEpEgmbZoMDsvjCF0tf2pyGKULV1haMnG04Zzxek'
};
window.VENVM_CATEGORIES = [{
  tag: 'Race Spec',
  tone: 'magenta',
  icon: 'speed',
  title: 'Performance Tuning',
  desc: 'ECU remapping and physical component upgrades for peak horsepower.'
}, {
  tag: 'Lightweight',
  tone: 'neutral',
  icon: 'air',
  title: 'Aero & Carbon',
  desc: 'Wind-tunnel tested carbon fiber components for superior downforce.'
}, {
  tag: 'Titanium',
  tone: 'magenta',
  icon: 'surround_sound',
  title: 'Exhaust Systems',
  desc: 'Signature acoustic engineering with lightweight valvetronic systems.'
}, {
  tag: 'Forged',
  tone: 'neutral',
  icon: 'settings_motion_mode',
  title: 'Forged Wheels',
  desc: 'Ultra-lightweight aerospace grade aluminum alloy wheel sets.'
}];
window.VENVM_PRODUCTS = [{
  id: 'intake',
  name: 'V-FLOW INTAKE',
  sub: 'Carbon Fiber Cold Air Intake',
  price: 1850,
  img: 'intake',
  feats: ['+18 WHP Gain (Dyno Tested)', '2x2 Pre-preg Carbon Fiber', 'High-flow Washable Filter']
}, {
  id: 'exhaust',
  name: 'VALVEMASTER TI',
  sub: 'Full Titanium Valvetronic Exhaust',
  price: 4200,
  img: 'exhaust',
  feats: ['Full Grade 5 Titanium', 'Active Valve Control Module', '-12kg Weight Reduction']
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SpecTile = __ds_scope.SpecTile;

__ds_ns.Tag = __ds_scope.Tag;

})();
